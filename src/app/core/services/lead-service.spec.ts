import { TestBed } from '@angular/core/testing';
import { nanoid } from 'nanoid';
import { lastValueFrom } from 'rxjs';

import type { ContactDao } from '../models/contact';
import type { LeadDao } from '../models/lead';
import type { NoteDao } from '../models/note';
import type { TaskDao } from '../models/task';
import { DexieRepository } from '../repository/dexie-repository';
import { ContactService } from './contact-service';
import { LeadService } from './lead-service';
import { NoteService } from './note-service';
import { TaskService } from './task-service';

jest.mock('nanoid', () => ({ nanoid: jest.fn() }));
const mockedNanoid = nanoid as jest.MockedFunction<typeof nanoid>;

interface MockLeadTable {
  where: jest.Mock;
  orderBy: jest.Mock;
  add: jest.Mock;
  update: jest.Mock;
}

describe('LeadService', () => {
  let service: LeadService;
  let mockLeadTable: MockLeadTable;
  let sortByMock: jest.Mock;
  let startsWithIgnoreCaseMock: jest.Mock;
  let toArrayMock: jest.Mock;
  let contactServiceMock: { getContactDaosByIdsAsync: jest.Mock };
  let taskServiceMock: { getTaskDaosByIdsAsync: jest.Mock };
  let noteServiceMock: { getNoteDaosByIdsAsync: jest.Mock };

  beforeEach(() => {
    mockedNanoid.mockReset();
    sortByMock = jest.fn();
    startsWithIgnoreCaseMock = jest.fn().mockReturnValue({ sortBy: sortByMock });
    toArrayMock = jest.fn();

    mockLeadTable = {
      where: jest.fn().mockReturnValue({ startsWithIgnoreCase: startsWithIgnoreCaseMock }),
      orderBy: jest.fn().mockReturnValue({ toArray: toArrayMock }),
      add: jest.fn().mockResolvedValue(undefined),
      update: jest.fn().mockResolvedValue(1),
    };

    contactServiceMock = {
      getContactDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };
    taskServiceMock = {
      getTaskDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };
    noteServiceMock = {
      getNoteDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };

    const dexieStub = {
      leads: mockLeadTable as unknown,
    } as DexieRepository;

    TestBed.configureTestingModule({
      providers: [
        LeadService,
        { provide: DexieRepository, useValue: dexieStub },
        { provide: ContactService, useValue: contactServiceMock },
        { provide: TaskService, useValue: taskServiceMock },
        { provide: NoteService, useValue: noteServiceMock },
      ],
    });

    service = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLeads', () => {
    it('should return hydrated leads with related entities', async () => {
      const now = new Date('2024-01-01T00:00:00Z');
      const leadDaos: LeadDao[] = [
        createLeadDao({
          id: 'lead-new',
          stage: 'new',
          contactId: 'contact-1',
          tasks: ['task-1'],
          notes: ['note-1'],
          createdAt: now,
          lastModifiedAt: now,
        }),
        createLeadDao({ id: 'lead-closed', stage: 'closed', createdAt: now, lastModifiedAt: now }),
      ];
      toArrayMock.mockResolvedValue(leadDaos);
      contactServiceMock.getContactDaosByIdsAsync.mockResolvedValue([
        createContactDao('contact-1', 'lead-new'),
      ]);
      taskServiceMock.getTaskDaosByIdsAsync.mockResolvedValue([
        createTaskDao('task-1', 'lead-new'),
      ]);
      noteServiceMock.getNoteDaosByIdsAsync.mockResolvedValue([
        createNoteDao('note-1', 'lead-new'),
      ]);

      const leads = await lastValueFrom(service.getLeads({ query: '', sort: 'asc' }));

      expect(mockLeadTable.orderBy).toHaveBeenCalledWith('createdAt');
      expect(leads.map((lead) => lead.getId())).toEqual(['lead-new', 'lead-closed']);
      const hydratedLead = leads[0];
      expect(hydratedLead.getContact()?.getId()).toBe('contact-1');
      expect(hydratedLead.getTasks()).toHaveLength(1);
      expect(hydratedLead.getNotes()).toHaveLength(1);
      expect(hydratedLead.getNotes()?.[0]?.getId()).toBe('note-1');

      expect(Array.from(contactServiceMock.getContactDaosByIdsAsync.mock.calls[0][0])).toEqual([
        'contact-1',
      ]);
      expect(Array.from(taskServiceMock.getTaskDaosByIdsAsync.mock.calls[0][0])).toEqual([
        'task-1',
      ]);
      expect(Array.from(noteServiceMock.getNoteDaosByIdsAsync.mock.calls[0][0])).toEqual([
        'note-1',
      ]);
    });

    it('should honor query filters and descending sort order', async () => {
      const now = new Date('2024-01-01T00:00:00Z');
      const leadDaos: LeadDao[] = [
        createLeadDao({ id: 'lead-a', stage: 'closed', createdAt: now, lastModifiedAt: now }),
        createLeadDao({
          id: 'lead-b',
          stage: 'closed',
          createdAt: new Date('2024-02-01T00:00:00Z'),
          lastModifiedAt: new Date('2024-02-01T00:00:00Z'),
        }),
      ];
      sortByMock.mockResolvedValue(leadDaos);

      const leads = await lastValueFrom(service.getLeads({ query: 'acme', sort: 'desc' }));

      expect(mockLeadTable.where).toHaveBeenCalledWith('title');
      expect(startsWithIgnoreCaseMock).toHaveBeenCalledWith('acme');
      expect(leads.map((lead) => lead.getId())).toEqual(['lead-b', 'lead-a']);
    });
  });

  describe('createLead', () => {
    it('should persist the new lead and emit the hydrated model', async () => {
      mockedNanoid.mockReturnValueOnce('lead-123');

      const lead = await lastValueFrom(service.createLead({ title: 'Prospect', value: 500 }));

      expect(lead.getId()).toBe('lead-123');
      expect(mockLeadTable.add).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'lead-123', title: 'Prospect', stage: 'new' }),
      );
    });
  });

  describe('updateLeadStage', () => {
    it('should update the record and emit void', async () => {
      mockLeadTable.update.mockResolvedValue(1);

      await lastValueFrom(service.updateLeadStage('lead-5', 'closed'));

      expect(mockLeadTable.update).toHaveBeenCalledWith(
        'lead-5',
        expect.objectContaining({ stage: 'closed' }),
      );
    });
  });
});

type CreateLeadParams = Partial<LeadDao> &
  Pick<LeadDao, 'id' | 'stage' | 'createdAt' | 'lastModifiedAt'>;

const createLeadDao = (overrides: CreateLeadParams): LeadDao => ({
  id: overrides.id,
  title: overrides.title ?? 'Sample lead',
  stage: overrides.stage,
  value: overrides.value,
  tags: overrides.tags,
  notes: overrides.notes,
  tasks: overrides.tasks,
  contactId: overrides.contactId,
  createdAt: overrides.createdAt,
  lastModifiedAt: overrides.lastModifiedAt,
});

const createContactDao = (id: string, leadId: string): ContactDao => ({
  id,
  leadId,
  name: 'Primary contact',
  createdAt: new Date('2023-01-01T00:00:00Z'),
});

const createTaskDao = (id: string, leadId: string): TaskDao => ({
  id,
  leadId,
  title: 'Follow up',
  status: 'todo',
  createdAt: new Date('2023-01-02T00:00:00Z'),
});

const createNoteDao = (id: string, leadId: string): NoteDao => ({
  id,
  leadId,
  text: 'Met with client',
  createdAt: new Date('2023-01-03T00:00:00Z'),
});
