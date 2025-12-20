import { inject, Injectable } from '@angular/core';
import { Table } from 'dexie';
import { NoteDao } from '../models/note';
import { DexieRepository } from '../repository/dexie-repository';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private noteDb: Table<NoteDao, string>;

  constructor() {
    const db = inject(DexieRepository);
    this.noteDb = db.notes;
  }

  getNoteDaosByIdsAsync(noteIds: Set<string> | string[]): Promise<(NoteDao | undefined)[]> {
    return this.noteDb.bulkGet(Array.from(noteIds));
  }
}
