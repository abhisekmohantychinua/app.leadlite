import { TestBed } from '@angular/core/testing';
import Dexie from 'dexie';

import type { User } from '../models/user';
import { DB_NAME, DB_VERSION, DexieRepository } from './dexie-repository';

const globalRef = globalThis as typeof globalThis & {
  structuredClone?: <T>(value: T) => T;
};

if (!globalRef.structuredClone) {
  globalRef.structuredClone = <T>(value: T): T => value;
}

describe('DexieRepository', () => {
  let service: DexieRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexieRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be instance of DexieRepository and Dexie', () => {
    expect(service).toBeInstanceOf(DexieRepository);
    expect(service).toBeInstanceOf(Dexie);
  });

  it('should have valid DB_NAME and DB_VERSION defined as constant', () => {
    expect(service.name).toEqual(DB_NAME);
    expect(service.verno).toEqual(DB_VERSION);
  });

  it('should open the database', async () => {
    await service.readyDexieOpenPromise;
    expect(service.isOpen()).toBe(true);
  });

  it('should create the "users" table', async () => {
    await service.readyDexieOpenPromise;
    const tableNames = service.tables
      .filter((table) => table.name === 'users')
      .map((table) => table.name);
    expect(tableNames).toContain('users');
  });

  it('should clear all tables when resetAllData is called', async () => {
    await service.readyDexieOpenPromise;
    const user: User = {
      id: '1',
      name: 'Reset Tester',
      username: 'reset-user',
      password: 'hash',
      profile: {} as Blob,
      createdAt: new Date(),
      lastModifiedAt: undefined,
    };

    await service.users.add(user);
    const secretsTable = service.secrets;
    await secretsTable.add({ id: 1, userSalt: 'salt', sessionHash: 'hash' });

    await service.resetAllData();

    expect(await service.users.count()).toBe(0);
    expect(await secretsTable.count()).toBe(0);
  });
});
