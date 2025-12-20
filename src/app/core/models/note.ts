import type { Lead } from './lead';

/**
 * Shallow representation of a note, excluding lead details.
 */
export interface NoteShallow {
  id: string;
  text: string;
  createdAt: Date;
}

/**
 * Deep representation of a note, including lead details.
 */
export interface NoteDeep extends NoteShallow {
  lead: Lead;
}

/**
 * Data Access Object (DAO) for Note, optimized for database storage.
 */
export interface NoteDao {
  id: string;
  leadId?: string;
  text: string;
  createdAt: Date;
}

/**
 * Represents a note associated with a lead.
 */
export class Note {
  private id: string;
  private lead: Lead | null;
  private text: string;
  private createdAt: Date;

  constructor(noteData: NoteShallow | NoteDeep) {
    this.id = noteData.id;
    this.text = noteData.text;
    this.createdAt = noteData.createdAt;
    this.lead = 'lead' in noteData ? noteData.lead : null;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getLead(): Lead | null {
    return this.lead;
  }

  setLead(lead: Lead | null): void {
    this.lead = lead;
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  static toNoteFromDao(noteDao: NoteDao, lead?: Lead): Note {
    const data: NoteDeep | NoteShallow = lead
      ? { id: noteDao.id, text: noteDao.text, createdAt: noteDao.createdAt, lead }
      : { id: noteDao.id, text: noteDao.text, createdAt: noteDao.createdAt };
    return new Note(data);
  }

  static toDaoFromNote(note: Note, leadId?: string): NoteDao {
    const leadRef = note.getLead();
    const finalLeadId = leadRef?.getId() ?? leadId;
    if (!finalLeadId) {
      throw new Error('Cannot convert Note to NoteDao without associated Lead');
    }
    return {
      id: note.getId(),
      leadId: finalLeadId,
      text: note.getText(),
      createdAt: note.getCreatedAt(),
    };
  }
}
