import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';
import { LeadValue } from './lead-value';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadValue', () => {
  let component: LeadValue;
  let fixture: ComponentFixture<LeadValue>;
  let leadService: { updateLead: jest.Mock };

  beforeEach(async () => {
    leadService = {
      updateLead: jest.fn().mockReturnValue(of(void 0)),
    };

    await TestBed.configureTestingModule({
      imports: [LeadValue],
      providers: [{ provide: LeadService, useValue: leadService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadValue);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leadId', 'lead-123');
    fixture.componentRef.setInput('leadValue', 150000);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should populate the form control with the incoming value', () => {
      expect(component.leadFormControl.value).toBe(150000);
    });
  });

  describe('toggleEditMode', () => {
    it('should flip the edit mode signal state', () => {
      expect(component.editMode()).toBe(false);
      component.toggleEditMode();
      expect(component.editMode()).toBe(true);
      component.toggleEditMode();
      expect(component.editMode()).toBe(false);
    });
  });

  describe('saveValue', () => {
    it('should persist the latest numeric value and exit edit mode on success', () => {
      component.toggleEditMode();
      component.leadFormControl.setValue(275000);

      component.saveValue();

      expect(leadService.updateLead).toHaveBeenCalledWith('lead-123', { value: 275000 });
      expect(component.editMode()).toBe(false);
    });

    it('should pass undefined when the value is cleared', () => {
      component.leadFormControl.setValue(null);

      component.saveValue();

      expect(leadService.updateLead).toHaveBeenCalledWith('lead-123', { value: undefined });
    });

    it('should log an error when leadService.updateLead fails', () => {
      const updateError = new Error('Unable to update value');
      leadService.updateLead.mockReturnValue(throwError(() => updateError));
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      component.saveValue();

      expect(consoleSpy).toHaveBeenCalledWith('Error updating lead value:', updateError);
      consoleSpy.mockRestore();
    });
  });
});
