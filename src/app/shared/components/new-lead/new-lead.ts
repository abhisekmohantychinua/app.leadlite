import type { OnDestroy } from '@angular/core';
import { Component, inject, output, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocus } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Popover, PopoverModule } from 'primeng/popover';
import type { Subscription } from 'rxjs';

import type { LeadRequest } from '../../../core/dto/lead-request';
import type { Lead } from '../../../core/models/lead';
import { LeadService } from '../../../core/services/lead-service';

@Component({
  selector: 'app-new-lead',
  imports: [
    ButtonModule,
    PopoverModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    AutoFocus,
    Message,
  ],
  templateUrl: './new-lead.html',
  styleUrl: './new-lead.scss',
})
export class NewLead implements OnDestroy {
  private leadService = inject(LeadService);
  private fb = inject(FormBuilder);
  private readonly addLeadPopover = viewChild.required<Popover>('addLeadPopover');
  private createLeadSubscription?: Subscription;
  protected readonly newLeadForm = this.fb.group({
    lead: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(100)],
    }),
    value: this.fb.control<number | null>(null, {
      validators: [Validators.min(0)],
    }),
  });

  protected formSubmitted = signal<boolean>(false);
  protected loading = signal<boolean>(false);
  createdNewLead = output<Lead>();

  // Shared invalid helper keeps template conditionals brief.
  isInvalid(controlName: string): boolean {
    const control = this.newLeadForm.get(controlName);
    return Boolean(control && control.invalid && (control.touched || this.formSubmitted()));
  }

  handleSubmit(): void {
    this.formSubmitted.set(true);
    if (this.newLeadForm.invalid) {
      return;
    }
    this.loading.set(true);
    const { lead, value } = this.newLeadForm.getRawValue();
    const leadRequest: LeadRequest = {
      title: lead,
      value: value ?? undefined,
    };
    this.createLeadSubscription = this.leadService.createLead(leadRequest).subscribe({
      next: (lead) => {
        this.resetForm();
        this.createdNewLead.emit(lead);
        this.addLeadPopover().hide();
      },
      error: (err) => {
        console.error('Error creating lead:', err);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  resetForm(): void {
    this.newLeadForm.reset({ lead: '', value: null });
    this.formSubmitted.set(false);
    this.loading.set(false);
  }
  ngOnDestroy(): void {
    this.createLeadSubscription?.unsubscribe();
  }
}
