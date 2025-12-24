import { inject, Injectable } from '@angular/core';
import type { Table } from 'dexie';

import type { ContactDao } from '../models/contact';
import { DexieRepository } from '../repository/dexie-repository';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactDb: Table<ContactDao, string>;

  constructor() {
    const db = inject(DexieRepository);
    this.contactDb = db.contacts;
  }

  getContactDaosByIdsAsync(
    contactIds: Set<string> | string[],
  ): Promise<(ContactDao | undefined)[]> {
    return this.contactDb.bulkGet(Array.from(contactIds));
  }

  getContactDaoByIdAsync(contactId: string): Promise<ContactDao | undefined> {
    return this.contactDb.get(contactId);
  }
}
