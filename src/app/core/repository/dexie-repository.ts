import { Injectable } from '@angular/core';
import type { Table } from 'dexie';
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

export const DB_NAME = 'LeadLiteDB';
export const DB_VERSION = 1;

@Injectable({
  providedIn: 'root',
})
export class DexieRepository extends Dexie {
  users!: Table<User, string>;
  secrets!: Table<Secret, number>;
  leads!: Table<LeadDao, string>;
  contacts!: Table<ContactDao, string>;
  tasks!: Table<TaskDao, string>;
  notes!: Table<NoteDao, string>;
  clients!: Table<ClientDao, string>;
  projects!: Table<ProjectDao, string>;
  payments!: Table<PaymentDao, string>;

  /**
   * @internal For testing purposes only
   * This Promise resolves when the database is fully opened.
   */
  readonly readyDexieOpenPromise: Promise<Dexie>; // Promise to resolve when the database is ready

  /**
   * Initializes a new instance of the DexieRepository class.
   *
   * This constructor calls the superclass constructor with the name 'LeadLiteDB',
   * defines the schema for the 'users' table with the specified columns, and
   * opens the database.
   */
  constructor() {
    super(DB_NAME); // Name of the IndexedDB database
    this.version(DB_VERSION).stores({
      users: 'id, name, &username, password, profile, createdAt, lastModifiedAt', // User schema
      secrets: '++id, &userSalt, &sessionHash', // Secret schema
      leads: 'id, title, stage, value, *tags, *notes, *tasks, contactId, createdAt, lastModifiedAt', // Lead schema
      contacts: 'id, leadId, name, email, phone, company, createdAt, lastModifiedAt', // Contact schema
      tasks: 'id, leadId, title, dueDate, status, createdAt, lastModifiedAt', // Task schema
      notes: 'id, leadId, text, createdAt', // Note schema
      clients: 'id, name, email, phone, company, *projects, createdAt, lastModifiedAt', // Client schema
      projects:
        'id, clientId, name, status, link, startDate, endDate, remark, feedback, *payments, createdAt, lastModifiedAt', // Project schema
      payments:
        'id, projectId, clientId, remark, dateTime, amount, currency, payerName, paymentMethod, paymentReference, createdAt, lastModifiedAt', // Payment schema
    });
    this.readyDexieOpenPromise = this.open(); // Important: Open the database to start using it
  }

  // TODO: to be added in future versions if needed
  /**
   * Lifecycle hook that is called when the component is destroyed.
   * It is responsible for closing the IndexedDB database connection.
   */
  // ngOnDestroy(): void {
  //   if (this.isOpen()) {
  //     this.close(); // Close the database on destroy
  //     console.log('Database closed successfully.');
  //   }
  // }

  /**
   * Clears every table managed by Dexie in a single read/write transaction.
   * Used by destructive maintenance flows (e.g., "Reset Entirely").
   */
  async resetAllData(): Promise<void> {
    await this.readyDexieOpenPromise;
    const tables = this.tables;
    if (!tables.length) return;

    for (const table of tables) {
      await table.clear();
    }
  }
}
