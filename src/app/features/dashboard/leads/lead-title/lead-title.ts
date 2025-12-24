import type { OnDestroy, OnInit } from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Message } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';
import type { Subscription } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';

@Component({
  selector: 'app-lead-title',
  imports: [ReactiveFormsModule, TextareaModule, IftaLabelModule, Message],
  templateUrl: './lead-title.html',
  styleUrl: './lead-title.scss',
})
export class LeadTitle implements OnInit, OnDestroy {
  private leadService = inject(LeadService);
  private updateLeadSubscription?: Subscription;

  editMode = signal<boolean>(false);

  leadTitle = input.required<string>();
  leadId = input.required<string>();
  leadFormControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(100),
  ]);

  ngOnInit(): void {
    this.leadFormControl.setValue(this.leadTitle());
  }

  toggleEditMode(): void {
    this.editMode.set(!this.editMode());
  }

  saveTitle(): void {
    this.leadService.updateLead(this.leadId(), { title: this.leadFormControl.value! }).subscribe({
      next: () => {
        this.editMode.set(false);
      },
      error: (err) => {
        console.error('Error updating lead title:', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.updateLeadSubscription?.unsubscribe();
  }
}
