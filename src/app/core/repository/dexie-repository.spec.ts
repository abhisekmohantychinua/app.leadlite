import { TestBed } from '@angular/core/testing';
import Dexie from 'dexie';

import type { ClientDao } from '../models/client';
import type { ContactDao } from '../models/contact';
import type { LeadDao } from '../models/lead';
import type { NoteDao } from '../models/note';
import type { PaymentDao } from '../models/payment';
import type { ProjectDao } from '../models/project';
import type { Secret } from '../models/secret';
import type { TaskDao } from '../models/task';
import type { User } from '../models/user';
import { DB_NAME, DB_VERSION, DexieRepository } from './dexie-repository';

const globalRef = globalThis as typeof globalThis & {
  structuredClone?: <T>(value: T) => T;
};

if (!globalRef.structuredClone) {
  globalRef.structuredClone = <T>(value: T): T => value;
}

const EXPECTED_TABLES = [
  'users',
  'secrets',
  'leads',
  'contacts',
  'tasks',
  'notes',
  'clients',
  'projects',
  'payments',
] as const;

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

  it('should register all expected tables in the schema', async () => {
    await service.readyDexieOpenPromise;
    const registeredTables = service.tables.map((table) => table.name);
    EXPECTED_TABLES.forEach((tableName) => {
      expect(registeredTables).toContain(tableName);
    });
  });

  it('should clear all tables when resetAllData is called', async () => {
    await service.readyDexieOpenPromise;
    const now = new Date();
    const user: User = {
      id: 'user-1',
      name: 'Reset Tester',
      username: 'reset-user',
      password: 'hash',
      profile: {} as Blob,
      createdAt: now,
      lastModifiedAt: now,
    };
    const secret: Secret = { id: 1, userSalt: 'salt', sessionHash: 'hash' };
    const lead: LeadDao = {
      id: 'lead-1',
      title: 'Important lead',
      stage: 'new',
      createdAt: now,
      lastModifiedAt: now,
    };
    const contact: ContactDao = {
      id: 'contact-1',
      leadId: lead.id,
      name: 'Lead Contact',
      createdAt: now,
    };
    const task: TaskDao = {
      id: 'task-1',
      leadId: lead.id,
      title: 'Call prospect',
      status: 'todo',
      createdAt: now,
    };
    const note: NoteDao = {
      id: 'note-1',
      leadId: lead.id,
      text: 'First note',
      createdAt: now,
    };
    const client: ClientDao = {
      id: 'client-1',
      name: 'ACME',
      createdAt: now,
    };
    const project: ProjectDao = {
      id: 'project-1',
      clientId: client.id,
      name: 'Implementation',
      status: 'upcoming',
      createdAt: now,
    };
    const payment: PaymentDao = {
      id: 'payment-1',
      projectId: project.id,
      clientId: client.id,
      dateTime: now,
      amount: 500,
      currency: 'USD',
      createdAt: now,
    };

    await service.users.add(user);
    await service.secrets.add(secret);
    await service.leads.add(lead);
    await service.contacts.add(contact);
    await service.tasks.add(task);
    await service.notes.add(note);
    await service.clients.add(client);
    await service.projects.add(project);
    await service.payments.add(payment);

    await service.resetAllData();

    const tablesToAssert = [
      service.users,
      service.secrets,
      service.leads,
      service.contacts,
      service.tasks,
      service.notes,
      service.clients,
      service.projects,
      service.payments,
    ];

    for (const table of tablesToAssert) {
      expect(await table.count()).toBe(0);
    }
  });
});
