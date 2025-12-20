import { inject, Injectable } from '@angular/core';
import type { Table } from 'dexie';
import { nanoid } from 'nanoid';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';

import type { LeadRequest } from '../dto/lead-request';
import type { SearchCriteria } from '../dto/search-criteria';
import type { ContactDao } from '../models/contact';
import { Contact } from '../models/contact';
import type { LeadDao, LeadShallow } from '../models/lead';
import { Lead } from '../models/lead';
import type { NoteDao } from '../models/note';
import { Note } from '../models/note';
import type { TaskDao } from '../models/task';
import { Task } from '../models/task';
import { DexieRepository } from '../repository/dexie-repository';
import { ContactService } from './contact-service';
import { NoteService } from './note-service';
import { TaskService } from './task-service';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private leadDb: Table<LeadDao, string>;
  private contactService: ContactService;
  private taskService: TaskService;
  private noteService: NoteService;

  constructor() {
    const db = inject(DexieRepository);
    this.leadDb = db.leads;
    this.contactService = inject(ContactService);
    this.taskService = inject(TaskService);
    this.noteService = inject(NoteService);
  }

  /**
   * Retrieves leads based on the given search criteria.
   * @param criteria The search criteria to filter leads.
   * @returns An observable that emits an array of Lead objects.
   */
  getLeads(criteria: SearchCriteria): Observable<Lead[]> {
    return defer(() => this.getLeadsAsync(criteria));
  }

  /**
   * Asynchronously retrieves leads based on the given search criteria.
   * @param criteria The search criteria to filter leads.
   * @returns A promise that resolves to an array of Lead objects.
   */
  private async getLeadsAsync(criteria: SearchCriteria): Promise<Lead[]> {
    // 1. Define sets to collect unique IDs,
    // Define map to store leads by id
    const contactIds = new Set<string>();
    const taskIds = new Set<string>();
    const noteIds = new Set<string>();
    const leadMap = new Map<string, Lead>();

    return (
      this.filterLeadsBasedOnCriteria(criteria) // 2. Filter leads based on criteria
        // 3. Process LeadDaos, populate leadMap, and collect related IDs
        .then((leadDaos) =>
          this.processLeadDaoAndPopulateAndLoadContacts(
            leadDaos,
            leadMap,
            contactIds,
            taskIds,
            noteIds,
          ),
        )
        // 4. Hydrate leads with contacts and load tasks
        .then((contactDaos) =>
          this.hydrateLeadsWithContactsAndLoadTasks(contactDaos, leadMap, taskIds),
        )
        // 5. Hydrate leads with tasks and load notes
        .then((taskDaos) => this.hydrateLeadsWithTasksAndLoadNotes(taskDaos, leadMap, noteIds))
        // 6. Hydrate leads with notes
        .then((noteDaos) => this.hydrateLeadsWithNotes(noteDaos, leadMap))
        // 7. Return array of leads
        .then(() => Array.from(leadMap.values()))
    );
  }

  /**
   * Filters leads based on the given search criteria.
   * @param criteria The search criteria to filter leads.
   * @returns A promise that resolves to an array of LeadDao objects matching the criteria.
   */
  private filterLeadsBasedOnCriteria(criteria: SearchCriteria): Promise<LeadDao[]> {
    if (criteria.query.trim() === '' && criteria.sort === 'asc')
      return this.leadDb.orderBy('createdAt').toArray();
    return this.leadDb
      .where('title')
      .startsWithIgnoreCase(criteria.query || '')
      .sortBy('createdAt')
      .then((leads) => (criteria.sort === 'asc' ? leads : leads.reverse()));
  }

  /**
   * Processes LeadDaos to populate the lead map and collect related IDs,
   * then loads the associated ContactDaos.
   * @param leadDaos The array of LeadDao objects to process.
   * @param leadMap The map to populate with Lead objects.
   * @param contactIds The set to collect unique Contact IDs.
   * @param taskIds The set to collect unique Task IDs.
   * @param noteIds The set to collect unique Note IDs.
   * @returns A promise that resolves to an array of ContactDao objects.
   */
  private processLeadDaoAndPopulateAndLoadContacts(
    leadDaos: LeadDao[],
    leadMap: Map<string, Lead>,
    contactIds: Set<string>,
    taskIds: Set<string>,
    noteIds: Set<string>,
  ): Promise<(ContactDao | undefined)[]> {
    leadDaos.forEach((leadDao) => {
      if (leadDao.contactId) contactIds.add(leadDao.contactId);
      leadDao.tasks?.forEach((taskId) => taskIds.add(taskId));
      leadDao.notes?.forEach((noteId) => noteIds.add(noteId));
      const lead: Lead = Lead.toLeadFromDao(leadDao);
      leadMap.set(lead.getId(), lead);
    });
    return this.contactService.getContactDaosByIdsAsync(contactIds);
  }

  /**
   * Hydrates leads with their associated contacts,
   * then loads the associated TaskDaos.
   * @param contactDaos The array of ContactDao objects.
   * @param leadMap The map of Lead objects to hydrate.
   * @param taskIds The set of unique Task IDs to load.
   * @returns A promise that resolves to an array of TaskDao objects.
   */
  private hydrateLeadsWithContactsAndLoadTasks(
    contactDaos: (ContactDao | undefined)[],
    leadMap: Map<string, Lead>,
    taskIds: Set<string>,
  ): Promise<(TaskDao | undefined)[]> {
    contactDaos.forEach((contactDao) => {
      if (contactDao) {
        const contact: Contact = Contact.toContactFromDao(contactDao);
        const leadId = contactDao.leadId;
        const lead = leadMap.get(leadId);
        if (lead) {
          lead.setContact(contact);
        }
      }
    });
    return this.taskService.getTaskDaosByIdsAsync(taskIds);
  }

  /**
   * Hydrates leads with their associated tasks,
   * then loads the associated NoteDaos.
   * @param taskDaos The array of TaskDao objects.
   * @param leadMap The map of Lead objects to hydrate.
   * @param noteIds The set of unique Note IDs to load.
   * @returns A promise that resolves to an array of NoteDao objects.
   */
  private hydrateLeadsWithTasksAndLoadNotes(
    taskDaos: (TaskDao | undefined)[],
    leadMap: Map<string, Lead>,
    noteIds: Set<string>,
  ): Promise<(NoteDao | undefined)[]> {
    taskDaos.forEach((taskDao) => {
      if (taskDao) {
        const task: Task = Task.toTaskFromDao(taskDao);
        const leadId = taskDao.leadId;
        const lead = leadMap.get(leadId);
        if (lead) {
          lead.getTasks()?.push(task);
        }
      }
    });
    return this.noteService.getNoteDaosByIdsAsync(noteIds);
  }

  /**
   * Hydrates leads with their associated notes.
   * @param noteDaos The array of NoteDao objects.
   * @param leadMap The map of Lead objects to hydrate.
   */
  private hydrateLeadsWithNotes(
    noteDaos: (NoteDao | undefined)[],
    leadMap: Map<string, Lead>,
  ): void {
    noteDaos.forEach((noteDao) => {
      if (noteDao) {
        const note: Note = Note.toNoteFromDao(noteDao);
        const leadId = noteDao.leadId;
        if (leadId) {
          const lead = leadMap.get(leadId);
          if (lead) {
            lead.getNotes()?.push(note);
          }
        }
      }
    });
  }

  /**
   * Creates a new lead based on the given LeadRequest.
   * @param LeadRequest The LeadRequest object containing lead details.
   * @returns An observable that emits the created Lead object.
   */
  createLead(LeadRequest: LeadRequest): Observable<Lead> {
    return defer(() => this.createLeadAsync(LeadRequest));
  }
  /**
   * Asynchronously creates a new lead based on the given LeadRequest.
   * @param LeadRequest The LeadRequest object containing lead details.
   * @returns A promise that resolves to the created Lead object.
   */
  private async createLeadAsync(LeadRequest: LeadRequest): Promise<Lead> {
    const newLeadShallow: LeadShallow = {
      id: nanoid(),
      title: LeadRequest.title,
      value: LeadRequest.value,
      stage: 'new',
      tags: [],
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    };
    const lead = new Lead(newLeadShallow);
    this.leadDb.add(Lead.toDaoFromLead(lead));
    return lead;
  }
}
