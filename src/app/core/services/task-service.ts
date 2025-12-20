import { inject, Injectable } from '@angular/core';
import type { Table } from 'dexie';

import type { TaskDao } from '../models/task';
import { DexieRepository } from '../repository/dexie-repository';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskDb: Table<TaskDao, string>;

  constructor() {
    const db = inject(DexieRepository);
    this.taskDb = db.tasks;
  }

  getTaskDaosByIdsAsync(taskIds: Set<string> | string[]): Promise<(TaskDao | undefined)[]> {
    return this.taskDb.bulkGet(Array.from(taskIds));
  }
}
