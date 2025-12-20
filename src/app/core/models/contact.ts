import type { Lead } from './lead';

/**
 * Represents a shallow version of a Contact, containing only basic information.
 * Must be used when the contact is present inside a Lead to avoid circular references.
 */
export interface ContactShallow {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Represents a deep version of a Contact, including the associated Lead.
 * Must be used when the contact is accessed independently.
 */
export interface ContactDeep extends ContactShallow {
  lead: Lead;
}

/**
 * Data Access Object (DAO) for Contact, optimized for database storage.
 */
export interface ContactDao {
  id: string;
  leadId: string; // Foreign key reference to Lead for persistence
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Represents a contact associated with a lead.
 */
export class Contact {
  private id: string;
  private lead: Lead | null; // Associated lead
  private name: string;
  private email?: string;
  private phone?: string;
  private company?: string;
  private createdAt: Date;
  private lastModifiedAt?: Date;

  constructor(contactShallow: ContactShallow);
  constructor(contactDeep: ContactDeep);
  constructor(contactData: ContactShallow | ContactDeep) {
    this.id = contactData.id;
    this.name = contactData.name;
    this.email = contactData.email;
    this.phone = contactData.phone;
    this.company = contactData.company;
    this.createdAt = contactData.createdAt;
    this.lastModifiedAt = contactData.lastModifiedAt;
    if ('lead' in contactData) {
      this.lead = contactData.lead;
    } else {
      this.lead = null;
    }
  }
  // Getters and setters
  getId(): string {
    return this.id;
  }

  getLead(): Lead | null {
    return this.lead;
  }

  setLead(lead: Lead | null): void {
    this.lead = lead;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEmail(): string | undefined {
    return this.email;
  }

  setEmail(email?: string): void {
    this.email = email;
  }

  getPhone(): string | undefined {
    return this.phone;
  }

  setPhone(phone?: string): void {
    this.phone = phone;
  }

  getCompany(): string | undefined {
    return this.company;
  }

  setCompany(company?: string): void {
    this.company = company;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  getLastModifiedAt(): Date | undefined {
    return this.lastModifiedAt;
  }

  setLastModifiedAt(lastModifiedAt?: Date): void {
    this.lastModifiedAt = lastModifiedAt;
  }

  static toContactFromDao(contactDao: ContactDao, lead?: Lead): Contact {
    const contactData: ContactDeep | ContactShallow = lead
      ? {
          id: contactDao.id,
          lead: lead,
          name: contactDao.name,
          email: contactDao.email,
          phone: contactDao.phone,
          company: contactDao.company,
          createdAt: contactDao.createdAt,
          lastModifiedAt: contactDao.lastModifiedAt,
        }
      : {
          id: contactDao.id,
          name: contactDao.name,
          email: contactDao.email,
          phone: contactDao.phone,
          company: contactDao.company,
          createdAt: contactDao.createdAt,
          lastModifiedAt: contactDao.lastModifiedAt,
        };
    return new Contact(contactData);
  }
  static toDaoFromContact(contact: Contact, leadId?: string): ContactDao {
    if (contact.getLead() === null && !leadId) {
      throw new Error('Cannot convert Contact to ContactDao without associated Lead');
    }
    const leadFromContact = contact.getLead();
    const leadIdToUse = leadFromContact ? leadFromContact.getId() : leadId!;
    return {
      id: contact.getId(),
      leadId: leadIdToUse, // Foreign key reference to Lead
      name: contact.getName(),
      email: contact.getEmail(),
      phone: contact.getPhone(),
      company: contact.getCompany(),
      createdAt: contact.getCreatedAt(),
      lastModifiedAt: contact.getLastModifiedAt(),
    };
  }
}
