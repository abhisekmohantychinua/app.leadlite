import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { LeadService } from '../../../../core/services/lead-service';
import { Subscription } from 'rxjs';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeadStage } from '../../../../core/models/lead';
import { SelectButton } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

interface LeadStageOption {
  tooltip: string;
  icon: string;
  value: LeadStage;
}

@Component({
  selector: 'app-lead-stage',
  imports: [SelectButton, ReactiveFormsModule, TooltipModule],
  templateUrl: './lead-stage.html',
  styleUrl: './lead-stage.scss',
})
export class LeadStageComponent implements OnInit, OnDestroy {
  private leadService = inject(LeadService);
  private updateLeadSubscription?: Subscription;

  protected LeadStageOptions: LeadStageOption[] = [
    { icon: 'pi pi-inbox', tooltip: 'New', value: 'new' },
    { icon: 'pi pi-comments', tooltip: 'Contacted', value: 'contacted' },
    { icon: 'pi pi-file-edit', tooltip: 'Proposal', value: 'proposal' },
    { icon: 'pi pi-check-circle', tooltip: 'Closed', value: 'closed' },
  ];

  leadStage = input.required<LeadStage>();
  leadId = input.required<string>();
  leadFormControl = new FormControl<LeadStage>('new', [Validators.required]);

  ngOnInit(): void {
    this.leadFormControl.setValue(this.leadStage());
  }

  saveStage(): void {
    this.leadService.updateLead(this.leadId(), { stage: this.leadFormControl.value! }).subscribe({
      next: () => {},
      error: (err) => {
        console.error('Error updating lead stage:', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.updateLeadSubscription?.unsubscribe();
  }
}
