import { TestBed } from '@angular/core/testing';
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

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadService', () => {
  let service: LeadService;
  let whereMock: jest.Mock;
  let startsWithIgnoreCaseMock: jest.Mock;
  let sortByMock: jest.Mock;
  let orderByMock: jest.Mock;
  let toArrayMock: jest.Mock;
  let contactServiceMock: { getContactDaosByIdsAsync: jest.Mock };
  let taskServiceMock: { getTaskDaosByIdsAsync: jest.Mock };
  let noteServiceMock: { getNoteDaosByIdsAsync: jest.Mock };

  beforeEach(() => {
    sortByMock = jest.fn();
    startsWithIgnoreCaseMock = jest.fn().mockReturnValue({ sortBy: sortByMock });
    whereMock = jest.fn().mockReturnValue({ startsWithIgnoreCase: startsWithIgnoreCaseMock });
    toArrayMock = jest.fn();
    orderByMock = jest.fn().mockReturnValue({ toArray: toArrayMock });

    contactServiceMock = {
      getContactDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };
    taskServiceMock = {
      getTaskDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };
    noteServiceMock = {
      getNoteDaosByIdsAsync: jest.fn().mockResolvedValue([]),
    };

    TestBed.configureTestingModule({
      providers: [
        LeadService,
        {
          provide: DexieRepository,
          useValue: { leads: { where: whereMock, orderBy: orderByMock } },
        },
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
    taskServiceMock.getTaskDaosByIdsAsync.mockResolvedValue([createTaskDao('task-1', 'lead-new')]);
    noteServiceMock.getNoteDaosByIdsAsync.mockResolvedValue([createNoteDao('note-1', 'lead-new')]);

    const leads = await lastValueFrom(service.getLeads({ query: '', sort: 'asc' }));

    expect(orderByMock).toHaveBeenCalledWith('createdAt');
    expect(leads.map((lead) => lead.getId())).toEqual(['lead-new', 'lead-closed']);
    const hydratedLead = leads[0];
    expect(hydratedLead.getContact()?.getId()).toBe('contact-1');
    expect(hydratedLead.getTasks()).toHaveLength(1);
    expect(hydratedLead.getNotes()).toHaveLength(1);
    expect(hydratedLead.getNotes()?.[0]?.getId()).toBe('note-1');

    const contactArg = contactServiceMock.getContactDaosByIdsAsync.mock.calls[0][0];
    expect(Array.from(contactArg)).toEqual(['contact-1']);
    const taskArg = taskServiceMock.getTaskDaosByIdsAsync.mock.calls[0][0];
    expect(Array.from(taskArg)).toEqual(['task-1']);
    const noteArg = noteServiceMock.getNoteDaosByIdsAsync.mock.calls[0][0];
    expect(Array.from(noteArg)).toEqual(['note-1']);
  });

  it('should honor query filters and sort order', async () => {
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

    expect(whereMock).toHaveBeenCalledWith('title');
    expect(startsWithIgnoreCaseMock).toHaveBeenCalledWith('acme');
    expect(leads.map((lead) => lead.getId())).toEqual(['lead-b', 'lead-a']);
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
