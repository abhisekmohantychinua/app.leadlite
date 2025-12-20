import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';

import { Lead } from '../../../core/models/lead';
import { LeadService } from '../../../core/services/lead-service';
import { NewLead } from './new-lead';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('NewLead', () => {
  let component: NewLead;
  let fixture: ComponentFixture<NewLead>;
  let createLeadMock: jest.Mock;

  beforeEach(async () => {
    createLeadMock = jest.fn();
    await TestBed.configureTestingModule({
      imports: [NewLead, NoopAnimationsModule],
      providers: [{ provide: LeadService, useValue: { createLead: createLeadMock } }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewLead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call the service when the form is invalid', () => {
    component.handleSubmit();

    expect(createLeadMock).not.toHaveBeenCalled();
    expect(component['loading']()).toBe(false);
  });

  it('should create a lead, reset the form, and emit the result', () => {
    const subject = new Subject<Lead>();
    createLeadMock.mockReturnValue(subject.asObservable());
    const emitSpy = jest.spyOn(component.createdNewLead, 'emit');
    component['newLeadForm'].setValue({ lead: 'Qualified Lead', value: 5000 });

    component.handleSubmit();

    expect(component['loading']()).toBe(true);
    expect(createLeadMock).toHaveBeenCalledWith({ title: 'Qualified Lead', value: 5000 });

    const mockLead = createLead();
    subject.next(mockLead);
    subject.complete();

    expect(emitSpy).toHaveBeenCalledWith(mockLead);
    const formValue = component['newLeadForm'].value;
    expect(formValue.lead).toBeNull();
    expect(formValue.value).toBeNull();
    expect(component['loading']()).toBe(false);
    expect(component['formSubmitted']()).toBe(false);
  });

  it('should stop loading when the service errors', () => {
    const subject = new Subject<Lead>();
    createLeadMock.mockReturnValue(subject.asObservable());
    const emitSpy = jest.spyOn(component.createdNewLead, 'emit');
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    component['newLeadForm'].setValue({ lead: 'Enterprise Lead', value: 2500 });

    component.handleSubmit();
    subject.error(new Error('boom'));

    expect(emitSpy).not.toHaveBeenCalled();
    expect(component['loading']()).toBe(false);
    consoleSpy.mockRestore();
  });

  it('should unsubscribe from the inflight request on destroy', () => {
    const subject = new Subject<Lead>();
    createLeadMock.mockReturnValue(subject.asObservable());
    component['newLeadForm'].setValue({ lead: 'Channel Lead', value: 1500 });

    component.handleSubmit();

    const subscription = component['createLeadSubscription'];
    expect(subscription).toBeTruthy();
    const unsubscribeSpy = jest.spyOn(subscription!, 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalledTimes(1);
  });
});

const createLead = (): Lead =>
  new Lead({
    id: 'lead-123',
    title: 'Qualified Lead',
    stage: 'new',
    value: 5000,
    tags: [],
    createdAt: new Date('2024-01-01T00:00:00Z'),
    lastModifiedAt: new Date('2024-01-01T00:00:00Z'),
  });
