import type { Client } from './client';
import type { Project } from './project';

/**
 * Represents a payment made for a project.
 */
export interface Payment {
  id: string;
  project: Project;
  client: Client;
  remark?: string;
  dateTime: Date;
  amount: number;
  currency: string;
  payerName?: string;
  paymentMethod?: PaymentMethod;
  paymentReference?: string;
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Data Access Object (DAO) for Payment, optimized for database storage.
 */
export interface PaymentDao {
  id: string;
  projectId: string; // Foreign key reference to Project for persistence
  clientId: string; // Foreign key reference to Client for persistence
  remark?: string;
  dateTime: Date;
  amount: number;
  currency: string;
  payerName?: string;
  paymentMethod?: PaymentMethod;
  paymentReference?: string;
  createdAt: Date;
  lastModifiedAt?: Date;
}

/**
 * Enum for different payment methods.
 */
export type PaymentMethod = 'cash' | 'credit_card' | 'bank_transfer' | 'paypal' | 'upi' | 'other';
/**
 *  List of all payment methods.
 */
export const PaymentMethods: PaymentMethod[] = [
  'cash',
  'credit_card',
  'bank_transfer',
  'paypal',
  'upi',
  'other',
];
