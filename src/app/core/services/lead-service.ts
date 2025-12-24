import { inject, Injectable } from '@angular/core';
import type { Table } from 'dexie';
import { nanoid } from 'nanoid';
import type { Observable } from 'rxjs';
import { defer, from, map } from 'rxjs';

import type { LeadRequest } from '../dto/lead-request';
import type { SearchCriteria } from '../dto/search-criteria';
import type { ContactDao } from '../models/contact';
import { Contact } from '../models/contact';
import type { LeadDao, LeadShallow, LeadStage } from '../models/lead';
import { Lead } from '../models/lead';
import type { NoteDao } from '../models/note';
import { Note } from '../models/note';
import type { TaskDao } from '../models/task';
import { Task } from '../models/task';
import { DexieRepository } from '../repository/dexie-repository';
import { ContactService } from './contact-service';
import { NoteService } from './note-service';
import { TaskService } from './task-service';
import { LeadUpdateRequest } from '../dto/lead-update-request';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private readonly leadDb: Table<LeadDao, string>;
  private readonly contactService: ContactService;
  private readonly taskService: TaskService;
  private readonly noteService: NoteService;

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
    return defer(() => from(this.getLeadsAsync(criteria)));
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
   * @param leadRequest The LeadRequest object containing lead details.
   * @returns An observable that emits the created Lead object.
   */
  createLead(leadRequest: LeadRequest): Observable<Lead> {
    return defer(() => from(this.createLeadAsync(leadRequest)));
  }
  /**
   * Asynchronously creates a new lead based on the given LeadRequest.
   * @param leadRequest The LeadRequest object containing lead details.
   * @returns A promise that resolves to the created Lead object.
   */
  private async createLeadAsync(leadRequest: LeadRequest): Promise<Lead> {
    const newLeadShallow: LeadShallow = {
      id: nanoid(),
      title: leadRequest.title,
      value: leadRequest.value,
      stage: 'new',
      tags: [],
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    };
    const lead = new Lead(newLeadShallow);
    await this.leadDb.add(Lead.toDaoFromLead(lead));
    return lead;
  }

  /**
   * Updates the stage of a lead with the given ID.
   * @param leadId The ID of the lead to update.
   * @param newStage The new stage to set for the lead.
   * @returns An observable that emits void when the update is complete.
   */
  updateLeadStage(leadId: string, newStage: LeadStage): Observable<void> {
    return defer(() => from(this.updateLeadStageAsync(leadId, newStage))).pipe(
      map((recordCount) => {
        // TODO: handle recordCount if needed
        console.log(`Updated ${recordCount} record(s)`);
        return;
      }),
    );
  }
  /**
   * Asynchronously updates the stage of a lead with the given ID.
   * @param leadId The ID of the lead to update.
   * @param newStage The new stage to set for the lead.
   * @returns A promise that resolves to the number of records updated.
   */
  private async updateLeadStageAsync(leadId: string, newStage: LeadStage): Promise<number> {
    return this.leadDb.update(leadId, {
      stage: newStage,
      lastModifiedAt: new Date(),
    });
  }

  /**
   * Deletes the lead with the given ID.
   * @param leadId The ID of the lead to delete.
   * @returns An observable that emits void when the deletion is complete.
   */
  deleteLead(leadId: string): Observable<void> {
    return defer(() => from(this.deleteLeadAsync(leadId)));
  }

  /**
   * Asynchronously deletes the lead with the given ID.
   * @param leadId The ID of the lead to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  private async deleteLeadAsync(leadId: string): Promise<void> {
    return this.leadDb.delete(leadId);
  }

  getLeadById(leadId: string): Observable<Lead> {
    return defer(() => from(this.getLeadByIdAsync(leadId)));
  }
  private async getLeadByIdAsync(leadId: string): Promise<Lead> {
    let lead: Lead, taskIds: string[], noteIds: string[];
    return this.leadDb
      .get(leadId)
      .then((leadDao) => {
        if (!leadDao) throw new Error(`Lead with id ${leadId} not found`);
        lead = Lead.toLeadFromDao(leadDao);
        taskIds = leadDao.tasks || [];
        noteIds = leadDao.notes || [];
        const contactId = leadDao.contactId;
        return contactId ? this.contactService.getContactDaoByIdAsync(contactId) : undefined;
      })
      .then((contactDaoOrUndefined) => {
        if (contactDaoOrUndefined) {
          const contact = Contact.toContactFromDao(contactDaoOrUndefined);
          lead.setContact(contact);
        }
        return this.taskService.getTaskDaosByIdsAsync(new Set(taskIds));
      })
      .then((taskDaos) => {
        taskDaos.forEach((taskDao) => {
          if (taskDao) {
            const task = Task.toTaskFromDao(taskDao);
            lead.getTasks()?.push(task);
          }
        });
        return this.noteService.getNoteDaosByIdsAsync(new Set(noteIds));
      })
      .then((noteDaos) => {
        noteDaos.forEach((noteDao) => {
          if (noteDao) {
            const note = Note.toNoteFromDao(noteDao);
            lead.getNotes()?.push(note);
          }
        });
        return lead;
      });
  }

  updateLead(leadId: string, leadUpdateRequest: LeadUpdateRequest): Observable<void> {
    return defer(() => from(this.updateLeadAsync(leadId, leadUpdateRequest))).pipe(
      map(() => {
        // TODO: handle updatedLead if needed
        console.log(`Updated lead with id ${leadId}`);
        return;
      }),
    );
  }
  private async updateLeadAsync(
    leadId: string,
    leadUpdateRequest: LeadUpdateRequest,
  ): Promise<number> {
    const updateData: Partial<LeadDao> = {
      ...(leadUpdateRequest.title !== undefined ? { title: leadUpdateRequest.title } : {}),
      ...(leadUpdateRequest.value !== undefined ? { value: leadUpdateRequest.value } : {}),
      ...(leadUpdateRequest.stage !== undefined ? { stage: leadUpdateRequest.stage } : {}),
      ...(leadUpdateRequest.tags !== undefined ? { tags: leadUpdateRequest.tags } : {}),
      lastModifiedAt: new Date(),
    };
    return this.leadDb.update(leadId, updateData);
  }
}
