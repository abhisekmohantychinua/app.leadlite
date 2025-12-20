import type { Project } from './project';
/**
 * Represents a client with associated details.
 */
export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  projects?: Project[];
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Data Access Object (DAO) for Client, optimized for database storage.
 */
export interface ClientDao {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  projects?: string[]; // Array of Project IDs for persistence
  createdAt: Date;
  lastModifiedAt?: Date;
}
