import type { Contact } from './contact';
import type { Note } from './note';
import type { Task } from './task';

/**
 * Represents the various stages a lead can be in.
 */
export type LeadStage = 'new' | 'contacted' | 'proposal' | 'closed';

/**
 * Array of all possible LeadStage values.
 */
export const LEAD_STAGES: LeadStage[] = ['new', 'contacted', 'proposal', 'closed'];

/**
 * Represents a shallow version of a Lead, containing only basic information.
 */
export interface LeadShallow {
  id: string;
  title: string;
  stage: LeadStage;
  value?: number;
  tags?: string[];
  createdAt: Date;
  lastModifiedAt: Date;
}

/**
 * Data Access Object (DAO) for Lead, optimized for database storage.
 */
export interface LeadDao {
  id: string;
  title: string;
  stage: LeadStage;
  value?: number;
  tags?: string[];
  notes?: string[]; // Array of Note IDs
  tasks?: string[]; // Array of Task IDs
  contactId?: string; // Contact ID
  createdAt: Date;
  lastModifiedAt: Date;
}

/**
 * Represents a sales lead with associated details.
 */
export class Lead {
  // Lead properties
  private id: string;
  private title: string;
  private stage: LeadStage;
  private value?: number;
  private tags?: string[];
  private notes?: Note[];
  private tasks?: Task[];
  private contact?: Contact;
  private createdAt: Date;
  private lastModifiedAt: Date;

  // Constructors
  constructor(leadShallow: LeadShallow);
  constructor(leadShallow: LeadShallow, contact: Contact, notes: Note[], tasks: Task[]);
  constructor(leadShallow: LeadShallow, contact?: Contact, notes: Note[] = [], tasks: Task[] = []) {
    this.id = leadShallow.id;
    this.title = leadShallow.title;
    this.stage = leadShallow.stage;
    this.value = leadShallow.value;
    this.tags = leadShallow.tags;
    this.createdAt = leadShallow.createdAt;
    this.lastModifiedAt = leadShallow.lastModifiedAt;
    this.contact = contact;
    this.notes = notes;
    this.tasks = tasks;
  }

  getId(): string {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getStage(): LeadStage {
    return this.stage;
  }
  getValue(): number | undefined {
    return this.value;
  }
  getTags(): string[] | undefined {
    return this.tags;
  }
  getNotes(): Note[] | undefined {
    return this.notes;
  }
  getTasks(): Task[] | undefined {
    return this.tasks;
  }
  getContact(): Contact | undefined {
    return this.contact;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getLastModifiedAt(): Date {
    return this.lastModifiedAt;
  }

  setId(id: string): void {
    this.id = id;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setStage(stage: LeadStage): void {
    this.stage = stage;
  }
  setValue(value: number | undefined): void {
    this.value = value;
  }
  setTags(tags: string[] | undefined): void {
    this.tags = tags;
  }
  setNotes(notes: Note[] | undefined): void {
    this.notes = notes;
  }
  setTasks(tasks: Task[] | undefined): void {
    this.tasks = tasks;
  }
  setContact(contact: Contact | undefined): void {
    this.contact = contact;
  }
  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  setLastModifiedAt(lastModifiedAt: Date): void {
    this.lastModifiedAt = lastModifiedAt;
  }

  getShallowCopy(): LeadShallow {
    return {
      id: this.id,
      title: this.title,
      stage: this.stage,
      value: this.value,
      tags: this.tags,
      createdAt: this.createdAt,
      lastModifiedAt: this.lastModifiedAt,
    };
  }

  static toLeadFromDao(leadDao: LeadDao): Lead {
    return new Lead({
      id: leadDao.id,
      title: leadDao.title,
      stage: leadDao.stage,
      value: leadDao.value,
      tags: leadDao.tags,
      createdAt: leadDao.createdAt,
      lastModifiedAt: leadDao.lastModifiedAt,
    });
  }

  static toDaoFromLead(lead: Lead): LeadDao {
    return {
      id: lead.getId(),
      title: lead.getTitle(),
      stage: lead.getStage(),
      value: lead.getValue(),
      tags: lead.getTags(),
      createdAt: lead.getCreatedAt(),
      lastModifiedAt: lead.getLastModifiedAt(),
      contactId: lead.getContact()?.getId(),
      notes: lead.getNotes()?.map((note) => note.getId()),
      tasks: lead.getTasks()?.map((task) => task.getId()),
    };
  }
}
