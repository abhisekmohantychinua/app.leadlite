import { TestBed } from '@angular/core/testing';

import type { TaskDao } from '../models/task';
import { DexieRepository } from '../repository/dexie-repository';
import { TaskService } from './task-service';

describe('TaskService', () => {
  let service: TaskService;
  let bulkGetMock: jest.Mock;

  beforeEach(() => {
    bulkGetMock = jest.fn().mockResolvedValue([createTaskDao('task-1')]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DexieRepository,
          useValue: {
            tasks: { bulkGet: bulkGetMock },
          } as unknown as DexieRepository,
        },
      ],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bulk fetch tasks via Dexie', async () => {
    const ids = ['task-1', 'task-2'];

    const result = await service.getTaskDaosByIdsAsync(ids);

    expect(bulkGetMock).toHaveBeenCalledWith(ids);
    expect(result).toEqual([createTaskDao('task-1')]);
  });
});

const createTaskDao = (id: string): TaskDao => ({
  id,
  leadId: 'lead-1',
  title: 'Follow up',
  status: 'todo',
  createdAt: new Date('2024-01-01T00:00:00Z'),
});
