import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';
import { LeadStageComponent } from './lead-stage';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadStageComponent', () => {
  let component: LeadStageComponent;
  let fixture: ComponentFixture<LeadStageComponent>;
  let leadService: { updateLead: jest.Mock };

  beforeEach(async () => {
    leadService = {
      updateLead: jest.fn().mockReturnValue(of(void 0)),
    };

    await TestBed.configureTestingModule({
      imports: [LeadStageComponent],
      providers: [{ provide: LeadService, useValue: leadService }, provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadStageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leadId', 'lead-123');
    fixture.componentRef.setInput('leadStage', 'proposal');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should seed the form control with the provided stage', () => {
      expect(component.leadFormControl.value).toBe('proposal');
    });
  });

  describe('saveStage', () => {
    it('should send the updated stage to LeadService', () => {
      component.leadFormControl.setValue('closed');

      component.saveStage();

      expect(leadService.updateLead).toHaveBeenCalledWith('lead-123', { stage: 'closed' });
    });

    it('should log an error when the update fails', () => {
      const updateError = new Error('Failed to update stage');
      leadService.updateLead.mockReturnValue(throwError(() => updateError));
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      component.saveStage();

      expect(consoleSpy).toHaveBeenCalledWith('Error updating lead stage:', updateError);
      consoleSpy.mockRestore();
    });
  });
});
