import type { Client } from './client';
import type { Payment } from './payment';

/**
 * Represents a project associated with a client.
 */
export interface Project {
  id: string;
  clientId: string;
  client: Client;
  name: string;
  status: ProjectStatus;
  link?: string;
  startDate?: Date;
  endDate?: Date;
  remark?: string;
  feedback?: string;
  payments?: Payment[];
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Data Access Object (DAO) for Project, optimized for database storage.
 */
export interface ProjectDao {
  id: string;
  clientId: string; // Foreign key reference to Client for persistence
  name: string;
  status: ProjectStatus;
  link?: string;
  startDate?: Date;
  endDate?: Date;
  remark?: string;
  feedback?: string;
  payments?: string[]; // Array of Payment IDs for persistence
  createdAt: Date;
  lastModifiedAt?: Date;
}
/**
 * Enum for different project statuses.
 */
export type ProjectStatus = 'upcoming' | 'onogoing' | 'completed' | 'cancelled';
/**
 * List of all project statuses.
 */
export const ProjectStatuses: ProjectStatus[] = ['upcoming', 'onogoing', 'completed', 'cancelled'];
