import { TestBed } from '@angular/core/testing';

import type { NoteDao } from '../models/note';
import { DexieRepository } from '../repository/dexie-repository';
import { NoteService } from './note-service';

describe('NoteService', () => {
  let service: NoteService;
  let bulkGetMock: jest.Mock;

  beforeEach(() => {
    bulkGetMock = jest.fn().mockResolvedValue([createNoteDao('note-1')]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DexieRepository,
          useValue: {
            notes: { bulkGet: bulkGetMock },
          } as unknown as DexieRepository,
        },
      ],
    });
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bulk fetch notes via Dexie', async () => {
    const ids = new Set(['note-1']);

    const result = await service.getNoteDaosByIdsAsync(ids);

    expect(bulkGetMock).toHaveBeenCalledWith(['note-1']);
    expect(result).toEqual([createNoteDao('note-1')]);
  });
});

const createNoteDao = (id: string): NoteDao => ({
  id,
  text: 'Call summary',
  createdAt: new Date('2024-01-01T00:00:00Z'),
  leadId: 'lead-1',
});
