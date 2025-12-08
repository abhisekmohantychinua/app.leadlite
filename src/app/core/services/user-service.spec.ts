import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user-service';
import { DexieRepository } from '../repository/dexie-repository';
import { CryptoService } from './crypto-service';
import { nanoid } from 'nanoid';
import { Secret } from '../models/secret';
import { User } from '../models/user';
import { UserRequest } from '../models/user-request';
import { UserUpdateRequest } from '../models/user-update-request';

// Mock nanoid
jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

// Mock nanoid
const mockedNanoid = nanoid as jest.MockedFunction<typeof nanoid>;

// Mock dexie
interface MockTable<T = unknown, K = unknown> {
  where?: jest.Mock;
  add?: jest.Mock<Promise<void>, [T]>;
  clear?: jest.Mock<Promise<void>, []>;
  update?: jest.Mock<Promise<number>, [K, T]>;
  get?: jest.Mock<Promise<T | undefined>, [K?]>;
  put?: jest.Mock<Promise<void>, [T]>;
  count?: jest.Mock<Promise<number>, []>;
  db?: { transaction: jest.Mock<Promise<void>, [string, ...MockTable[], () => Promise<void>]> };
}

describe('UserService', () => {
  let service: UserService;
  let mockUserTable: MockTable<User, string>;
  let mockSecretTable: MockTable<Secret, number>;
  let mockDexieRepo: DexieRepository;
  let mockCrypto: jest.Mocked<Pick<CryptoService, 'hashPBKDF2Async' | 'hashSHA256Async'>>;

  beforeEach(() => {
    mockedNanoid.mockReset();

    mockUserTable = {
      where: jest.fn().mockImplementation(() => ({
        equals: jest.fn().mockImplementation(() => ({
          count: jest.fn().mockResolvedValue(0),
          first: jest.fn().mockResolvedValue(undefined),
        })),
      })),
      add: jest.fn().mockResolvedValue(undefined),
      clear: jest.fn().mockResolvedValue(undefined),
      update: jest.fn().mockResolvedValue(1),
      count: jest.fn().mockResolvedValue(0),
      db: {
        transaction: jest
          .fn()
          .mockImplementation(
            async (_mode: string, ...args: (MockTable | (() => Promise<void>))[]) => {
              const cb = args[args.length - 1];
              if (typeof cb === 'function') return cb();
            },
          ),
      },
    };

    mockSecretTable = {
      add: jest.fn().mockResolvedValue(undefined),
      clear: jest.fn().mockResolvedValue(undefined),
      get: jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 'existing-salt', sessionHash: undefined }),
      put: jest.fn().mockResolvedValue(undefined),
    };

    mockDexieRepo = {
      users: mockUserTable as unknown as DexieRepository['users'],
      secrets: mockSecretTable as unknown as DexieRepository['secrets'],
    } as DexieRepository;

    mockCrypto = {
      hashPBKDF2Async: jest.fn(async (password: string, salt: string) => `${password}|${salt}`),
      hashSHA256Async: jest.fn(async (data: string) => `sha256(${data})`),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: DexieRepository, useValue: mockDexieRepo },
        { provide: CryptoService, useValue: mockCrypto },
        UserService,
      ],
    });

    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createUser', () => {
    it('should emit created user and complete', async () => {
      mockedNanoid.mockReturnValueOnce('salt-1').mockReturnValueOnce('user-id-1');

      const req: UserRequest = {
        username: 'alice',
        name: 'Alice',
        password: 'pw',
        profile: { size: 10 } as File,
      };

      const result = await firstValueFrom(service.createUser(req));
      expect(result.username).toBe('alice');
      expect(result.password).toBe('pw|salt-1');
      expect(mockUserTable.add).toHaveBeenCalled();
      expect(mockSecretTable.add).toHaveBeenCalled();
    });

    it('should propagate errors from createUserAsync', async () => {
      const spy = jest
        .spyOn(
          service as unknown as { createUserAsync: (u: UserRequest) => Promise<User> },
          'createUserAsync',
        )
        .mockRejectedValue(new Error('async fail'));

      await expect(firstValueFrom(service.createUser({} as UserRequest))).rejects.toThrow(
        'async fail',
      );
      spy.mockRestore();
    });
  });

  describe('createUserAsync', () => {
    const callAsync = (u: UserRequest) =>
      (
        service as unknown as { createUserAsync: (x: UserRequest) => Promise<User> }
      ).createUserAsync(u);

    it('should throw if profile size > 300kb', async () => {
      const req = { username: 'a', name: 'n', password: 'p', profile: { size: 400000 } as File };
      await expect(callAsync(req)).rejects.toThrow('Profile size should be less than 300kb');
    });

    it('should throw if username already exists', async () => {
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({ count: jest.fn().mockResolvedValue(1) }),
      });
      const req = { username: 'exists', name: 'n', password: 'p', profile: { size: 10 } as File };
      await expect(callAsync(req)).rejects.toThrow('Username already exists');
    });

    it('should create user and secret successfully', async () => {
      mockedNanoid.mockReturnValueOnce('salt-abc').mockReturnValueOnce('uid-abc');
      const req = {
        username: 'bob',
        name: 'Bob',
        password: 'pw123',
        profile: { size: 100 } as File,
      };
      const result = await callAsync(req);
      expect(result.username).toBe('bob');
      expect(result.password).toBe('pw123|salt-abc');
      expect(mockUserTable.clear).toHaveBeenCalled();
      expect(mockSecretTable.clear).toHaveBeenCalled();
    });
  });

  describe('updateUser', () => {
    it('should emit updated user and complete', async () => {
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({
          first: jest.fn().mockResolvedValue({
            id: 'u1',
            username: 'u1',
            name: 'Old',
            profile: { size: 10 } as File,
            password: 'oldpass',
          }),
        }),
      });

      mockUserTable.update = jest.fn().mockResolvedValue(1);

      const updateReq: UserUpdateRequest = { name: 'New Name' };
      const result = await firstValueFrom(service.updateUser('u1', updateReq));
      expect(result.name).toBe('New Name');
    });
  });

  describe('updateUserAsync', () => {
    const callAsync = (username: string, req: UserUpdateRequest) =>
      (
        service as unknown as {
          updateUserAsync: (u: string, r: UserUpdateRequest) => Promise<User>;
        }
      ).updateUserAsync(username, req);

    it('should throw if user not found', async () => {
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({ first: jest.fn().mockResolvedValue(undefined) }),
      });
      await expect(callAsync('nouser', {})).rejects.toThrow('User not found');
    });

    it('should throw if profile size > 300kb', async () => {
      const user: User = {
        id: '1',
        username: 'x',
        name: 'N',
        password: 'p',
        profile: { size: 10 } as File,
        createdAt: new Date(),
        lastModifiedAt: undefined,
      };
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({ first: jest.fn().mockResolvedValue(user) }),
      });
      await expect(callAsync('x', { profile: { size: 500000 } as File })).rejects.toThrow(
        'Profile size should be less than 300kb',
      );
    });
  });

  describe('loginUser', () => {
    it('should emit session key and complete', async () => {
      const storedPassword = 'mypw|salt-login';
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({
          first: jest
            .fn()
            .mockResolvedValue({ id: 'l1', username: 'luser', password: storedPassword }),
        }),
      });

      mockSecretTable.get = jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 'salt-login', sessionHash: undefined });
      mockedNanoid.mockReturnValueOnce('session-key');

      const result = await firstValueFrom(service.loginUser('luser', 'mypw'));
      expect(result).toBe('session-key');
      expect(sessionStorage.getItem('sessionKey')).toBe('session-key');
    });
  });

  describe('loginUserAsync', () => {
    const callAsync = (u: string, p: string) =>
      (
        service as unknown as { loginUserAsync: (u: string, p: string) => Promise<string> }
      ).loginUserAsync(u, p);

    it('should throw if user not found', async () => {
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({ first: jest.fn().mockResolvedValue(undefined) }),
      });
      await expect(callAsync('nouser', 'pw')).rejects.toThrow('User not found');
    });

    it('should throw if invalid password', async () => {
      (mockUserTable.where as jest.Mock).mockReturnValue({
        equals: jest.fn().mockReturnValue({
          first: jest.fn().mockResolvedValue({ id: 'x', username: 'x', password: 'stored' }),
        }),
      });
      mockSecretTable.get = jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 'salt', sessionHash: undefined });
      await expect(callAsync('x', 'wrong')).rejects.toThrow('Invalid password');
    });
  });

  describe('logoutUser', () => {
    it('should complete successfully', async () => {
      sessionStorage.setItem('sessionKey', 'abc');
      await expect(firstValueFrom(service.logoutUser())).resolves.toBeUndefined();
      expect(sessionStorage.getItem('sessionKey')).toBeNull();
    });
  });

  describe('logoutUserAsync', () => {
    const callAsync = () =>
      (service as unknown as { logoutUserAsync: () => Promise<void> }).logoutUserAsync();

    it('should remove sessionKey and clear secret hash', async () => {
      sessionStorage.setItem('sessionKey', 'abc');
      mockSecretTable.get = jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 's', sessionHash: 'old' });
      await callAsync();
      expect(sessionStorage.getItem('sessionKey')).toBeNull();
      expect(mockSecretTable.put).toHaveBeenCalledWith(
        expect.objectContaining({ sessionHash: undefined }),
      );
    });

    it('should handle missing secret gracefully', async () => {
      mockSecretTable.get = jest.fn().mockResolvedValue(undefined);
      await expect(callAsync()).resolves.toBeUndefined();
    });
  });

  describe('hasExistingUser', () => {
    const call$ = () => firstValueFrom(service.hasExistingUser());

    it('should return false when there are no users', async () => {
      mockUserTable.count?.mockResolvedValueOnce(0);
      await expect(call$()).resolves.toBe(false);
    });

    it('should return true when at least one user exists', async () => {
      mockUserTable.count?.mockResolvedValueOnce(1);
      await expect(call$()).resolves.toBe(true);
    });
  });

  describe('validateSessionKey', () => {
    const call$ = (key: string) => firstValueFrom(service.validateSessionKey(key));

    it('should return true when stored hash matches provided session key', async () => {
      mockSecretTable.get = jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 's', sessionHash: 'sha256(active-key)' });

      await expect(call$('active-key')).resolves.toBe(true);
      expect(mockCrypto.hashSHA256Async).toHaveBeenCalledWith('active-key');
    });

    it('should return false when session hash is missing', async () => {
      mockSecretTable.get = jest.fn().mockResolvedValue({ id: 1, userSalt: 's' });
      await expect(call$('missing')).resolves.toBe(false);
    });

    it('should return false when the key does not match stored hash', async () => {
      mockSecretTable.get = jest
        .fn()
        .mockResolvedValue({ id: 1, userSalt: 's', sessionHash: 'sha256(other)' });
      await expect(call$('active-key')).resolves.toBe(false);
    });
  });
});
