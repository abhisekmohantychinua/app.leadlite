import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';
import { LeadTitle } from './lead-title';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadTitle', () => {
  let component: LeadTitle;
  let fixture: ComponentFixture<LeadTitle>;
  let leadService: { updateLead: jest.Mock };

  beforeEach(async () => {
    leadService = {
      updateLead: jest.fn().mockReturnValue(of(void 0)),
    };

    await TestBed.configureTestingModule({
      imports: [LeadTitle],
      providers: [{ provide: LeadService, useValue: leadService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadTitle);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leadId', 'lead-123');
    fixture.componentRef.setInput('leadTitle', 'Important Pitch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should populate the form control with the incoming title', () => {
      expect(component.leadFormControl.value).toBe('Important Pitch');
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

  describe('saveTitle', () => {
    it('should call leadService.updateLead with the latest form value and exit edit mode', () => {
      component.toggleEditMode();
      component.leadFormControl.setValue('Renamed Opportunity');

      component.saveTitle();

      expect(leadService.updateLead).toHaveBeenCalledWith('lead-123', {
        title: 'Renamed Opportunity',
      });
      expect(component.editMode()).toBe(false);
    });

    it('should log an error when leadService.updateLead fails', () => {
      const updateError = new Error('Unable to update lead');
      leadService.updateLead.mockReturnValue(throwError(() => updateError));
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      component.saveTitle();

      expect(consoleSpy).toHaveBeenCalledWith('Error updating lead title:', updateError);
      consoleSpy.mockRestore();
    });
  });
});
