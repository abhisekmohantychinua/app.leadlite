import { inject, Injectable } from '@angular/core';
import type { Table } from 'dexie';
import { nanoid } from 'nanoid';
import type { Observable } from 'rxjs';
import { defer, from } from 'rxjs';

import type { Secret } from '../models/secret';
import type { User } from '../models/user';
import type { UserRequest } from '../dto/user-request';
import type { UserUpdateRequest } from '../dto/user-update-request';
import { DexieRepository } from '../repository/dexie-repository';
import { CryptoService } from './crypto-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userDb: Table<User, string>;
  private secretDb: Table<Secret, number>;
  private cryptoService: CryptoService;

  constructor() {
    const db = inject(DexieRepository);
    this.userDb = db.users;
    this.secretDb = db.secrets;
    this.cryptoService = inject(CryptoService);
  }

  /**
   * Creates a new user based on the given UserRequest.
   * @param userRequest - the request to create a new user
   * @returns an observable that emits the created user
   * @throws an error if the username already exists
   * @throws an error if the profile size is greater than 300kb
   */
  createUser(userRequest: UserRequest): Observable<User> {
    return defer(() => from(this.createUserAsync(userRequest)));
  }

  /**
   * Asynchronously creates a new user based on the given UserRequest.
   * @param userRequest - the request to create a new user
   * @returns a promise that resolves to the created user
   * @throws an error if the username already exists
   * @throws an error if the profile size is greater than 300kb
   */
  private async createUserAsync(userRequest: UserRequest): Promise<User> {
    // 1. validate request
    // profile size must not exceed 300kb
    if (userRequest.profile.size > 300000) {
      throw new Error('Profile size should be less than 300kb');
    }

    // 2. async username uniqueness check
    const count = await this.userDb.where('username').equals(userRequest.username).count();
    if (count > 0) {
      throw new Error('Username already exists');
    }

    // 3. generate salt object
    const userSalt = nanoid();

    // 4. hash password
    const hashedPassword = await this.cryptoService.hashPBKDF2Async(userRequest.password, userSalt);

    // 5. create user object
    const user: User = {
      id: nanoid(),
      name: userRequest.name,
      username: userRequest.username,
      password: hashedPassword,
      profile: userRequest.profile,
      createdAt: new Date(),
      lastModifiedAt: undefined,
    };

    // 6. create secret object with provided salt
    const secret: Secret = {
      id: 1, // fixed since only one record
      userSalt,
      sessionHash: undefined,
    };

    // 7. save user and secret atomically
    await this.userDb.db.transaction('rw', this.userDb, this.secretDb, () =>
      this.userDb
        .clear()
        .then(() => this.secretDb.clear())
        .then(() => this.userDb.add(user))
        .then(() => this.secretDb.add(secret)),
    );

    return user;
  }

  /**
   * Updates a user in the database.
   * @param username - the username of the user to update
   * @param userUpdateRequest - the request to update the user
   * @returns a promise that resolves with the updated user
   * @throws an error if the user is not found
   * @throws an error if the profile size is greater than 300kb
   */
  updateUser(username: string, userUpdateRequest: UserUpdateRequest): Observable<User> {
    return defer(() => from(this.updateUserAsync(username, userUpdateRequest)));
  }

  /**
   * Asynchronously updates a user in the database.
   * @param username - the username of the user to update
   * @param userUpdateRequest - the request to update the user
   * @returns a promise that resolves with the updated user
   * @throws an error if the user is not found
   * @throws an error if the profile size is greater than 300kb
   */
  private async updateUserAsync(
    username: string,
    userUpdateRequest: UserUpdateRequest,
  ): Promise<User> {
    // 1. Find existing user
    const user = await this.userDb.where('username').equals(username).first();
    if (!user) throw new Error('User not found');

    // 2. Apply updates to user object
    if (userUpdateRequest.name) user.name = userUpdateRequest.name;

    if (userUpdateRequest.profile) {
      if (userUpdateRequest.profile.size > 300000) {
        throw new Error('Profile size should be less than 300kb');
      }
      user.profile = userUpdateRequest.profile;
    }

    // 3. Password update
    if (userUpdateRequest.password) {
      const newSalt = nanoid();
      const hashedPassword = await this.cryptoService.hashPBKDF2Async(
        userUpdateRequest.password,
        newSalt,
      );
      user.password = hashedPassword;

      // Update secret table independently
      const secret = await this.secretDb.get(1);
      if (!secret) throw new Error('Salt not found');

      secret.userSalt = newSalt;
      await this.secretDb.put(secret);
    }

    user.lastModifiedAt = new Date();

    // 3. Save user updates (always)
    const updatedCount = await this.userDb.update(user.id, user);
    if (updatedCount === 0) throw new Error('Failed to update user');
    return user;
  }

  /**
   * Logs in a user.
   * @param username - the username of the user to log in
   * @param password - the password of the user to log in
   * @returns an observable that emits a session token if the login is successful, or an error if the login fails
   * @throws an error if the user is not found
   * @throws an error if the password is incorrect
   */
  loginUser(username: string, password: string): Observable<string> {
    return defer(() => from(this.loginUserAsync(username, password)));
  }

  /**
   * Asynchronously logs in a user.
   * @param username - the username of the user to log in
   * @param password - the password of the user to log in
   * @returns a promise that resolves with a session token if the login is successful, or an error if the login fails
   * @throws an error if the user is not found
   * @throws an error if the password is incorrect
   */
  private async loginUserAsync(username: string, password: string): Promise<string> {
    // 1. Find user by username
    const user = await this.userDb.where('username').equals(username).first();
    if (!user) throw new Error('User not found');

    // 2. Find secret
    const secret = await this.secretDb.get(1);
    if (!secret) throw new Error('Secret not found');
    if (!secret.userSalt) throw new Error('User salt not found');

    // 3. Hash password
    const hashedPassword = await this.cryptoService.hashPBKDF2Async(password, secret.userSalt);

    // 4. Verify password
    if (user.password !== hashedPassword) throw new Error('Invalid password');

    // 5. Generate session key
    const sessionKey = nanoid();

    // 6. Generate session hash from session key
    const sessionHash = await this.cryptoService.hashSHA256Async(sessionKey);

    // 7. Update secret
    secret.sessionHash = sessionHash;
    await this.secretDb.put(secret);

    // 8. Invalidate session if any and persist new session key
    sessionStorage.removeItem('sessionKey');
    sessionStorage.setItem('sessionKey', sessionKey);

    return sessionKey;
  }

  /**
   * Logs out a user by invalidating the session key and clearing the session hash.
   * This function returns a promise that resolves to void when the logout is successful.
   * @throws an error if the secret is not found
   */
  logoutUser(): Observable<void> {
    return defer(() => from(this.logoutUserAsync()));
  }

  /**
   * Asynchronously logs out a user by invalidating the session key and clearing the session hash.
   * This function returns a promise that resolves to void when the logout is successful.
   * @throws an error if the secret is not found
   */
  private async logoutUserAsync(): Promise<void> {
    // 1. Invalidate session or remove session key
    sessionStorage.removeItem('sessionKey');

    // 2. Clear session hash
    const secret = await this.secretDb.get(1);
    if (secret) {
      secret.sessionHash = undefined;
      await this.secretDb.put(secret);
    }
  }

  /**
   * Checks whether any user record exists in IndexedDB.
   * Used by signup flows to prevent multiple profiles per device.
   */
  hasExistingUser(): Observable<boolean> {
    return defer(() => from(this.hasExistingUserAsync()));
  }

  /**
   * Retrieves the single user profile stored on the device.
   * Surfaces an observable that emits the user or errors when none exists.
   */
  getUser(): Observable<User> {
    return defer(() => from(this.getUserAsync()));
  }

  /**
   * Validates an in-memory session key against the stored session hash.
   * Returns true when the hashes match, otherwise false.
   */
  validateSessionKey(sessionKey: string): Observable<boolean> {
    return defer(() => from(this.validateSessionKeyAsync(sessionKey)));
  }

  private async hasExistingUserAsync(): Promise<boolean> {
    const totalUsers = await this.userDb.count();
    return totalUsers > 0;
  }

  private async validateSessionKeyAsync(sessionKey: string): Promise<boolean> {
    if (!sessionKey) return false;

    const secret = await this.secretDb.get(1);
    if (!secret?.sessionHash) return false;

    const computedHash = await this.cryptoService.hashSHA256Async(sessionKey);
    return computedHash === secret.sessionHash;
  }

  private async getUserAsync(): Promise<User> {
    const user = await this.userDb.toCollection().first();
    if (!user) throw new Error('User not found');
    return user;
  }
}
