import type { Lead } from './lead';

/**
 * Enum for different task statuses.
 */
export type TaskStatus = 'todo' | 'done' | 'skipped';
/**
 * List of all task statuses.
 */
export const TASK_STATUSES: TaskStatus[] = ['todo', 'done', 'skipped'];

/**
 * Shallow representation of a task, excluding lead details.
 * Must be used when the task is present inside a Lead to avoid circular references.
 */
export interface TaskShallow {
  id: string;
  title: string;
  dueDate?: Date;
  status: TaskStatus;
  reminder?: Date;
  createdAt: Date;
}

/**
 * Deep representation of a task, including lead details.
 * Must be used when the task is accessed independently.
 */
export interface TaskDeep extends TaskShallow {
  lead: Lead;
}

/**
 * Data Access Object (DAO) for Task, optimized for database storage.
 */
export interface TaskDao {
  id: string;
  leadId: string; // Foreign key reference to Lead for persistence
  title: string;
  dueDate?: Date;
  status: TaskStatus;
  reminder?: Date;
  createdAt: Date;
}

/**
 * Represents a task associated with a lead.
 */
export class Task {
  private id: string;
  private lead: Lead | null;
  private title: string;
  private dueDate?: Date;
  private status: TaskStatus;
  private reminder?: Date;
  private createdAt: Date;

  constructor(taskShallow: TaskShallow);
  constructor(taskDeep: TaskDeep);
  constructor(taskData: TaskShallow | TaskDeep) {
    this.id = taskData.id;
    this.title = taskData.title;
    this.dueDate = taskData.dueDate;
    this.status = taskData.status;
    this.reminder = taskData.reminder;
    this.createdAt = taskData.createdAt;
    if ('lead' in taskData) {
      this.lead = taskData.lead;
    } else {
      this.lead = null;
    }
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

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getDueDate(): Date | undefined {
    return this.dueDate;
  }

  setDueDate(dueDate: Date | undefined): void {
    this.dueDate = dueDate;
  }

  getStatus(): TaskStatus {
    return this.status;
  }

  setStatus(status: TaskStatus): void {
    this.status = status;
  }

  getReminder(): Date | undefined {
    return this.reminder;
  }

  setReminder(reminder: Date | undefined): void {
    this.reminder = reminder;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  static toTaskFromDao(taskDao: TaskDao, lead?: Lead): Task {
    const taskData: TaskDeep | TaskShallow = lead
      ? {
          id: taskDao.id,
          lead: lead,
          title: taskDao.title,
          dueDate: taskDao.dueDate,
          status: taskDao.status,
          reminder: taskDao.reminder,
          createdAt: taskDao.createdAt,
        }
      : {
          id: taskDao.id,
          title: taskDao.title,
          dueDate: taskDao.dueDate,
          status: taskDao.status,
          reminder: taskDao.reminder,
          createdAt: taskDao.createdAt,
        };
    return new Task(taskData);
  }
  static toDaoFromTask(task: Task, leadId?: string): TaskDao {
    if (task.getLead() === null && !leadId) {
      throw new Error('Cannot convert Task to TaskDao without associated Lead');
    }
    const leadFromTask = task.getLead();
    const finalLeadId = leadFromTask ? leadFromTask.getId() : leadId!;
    return {
      id: task.getId(),
      leadId: finalLeadId,
      title: task.getTitle(),
      dueDate: task.getDueDate(),
      status: task.getStatus(),
      reminder: task.getReminder(),
      createdAt: task.getCreatedAt(),
    };
  }
}
