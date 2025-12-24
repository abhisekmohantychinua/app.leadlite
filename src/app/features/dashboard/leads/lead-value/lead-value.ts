import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { Message } from 'primeng/message';
import type { Subscription } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';

@Component({
  selector: 'app-lead-value',
  imports: [ReactiveFormsModule, InputNumberModule, IftaLabelModule, Message, CurrencyPipe],
  templateUrl: './lead-value.html',
  styleUrl: './lead-value.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadValue implements OnInit, OnDestroy {
  private leadService = inject(LeadService);
  private updateLeadSubscription?: Subscription;

  editMode = signal(false);

  leadValue = input<number | undefined>(undefined);
  leadId = input.required<string>();
  leadFormControl = new FormControl<number | null>(null, [Validators.min(0)]);

  ngOnInit(): void {
    this.leadFormControl.setValue(this.leadValue() ?? null);
  }

  toggleEditMode(): void {
    this.editMode.set(!this.editMode());
  }

  saveValue(): void {
    this.leadFormControl.markAsTouched();
    if (this.leadFormControl.invalid) {
      return;
    }
    const normalizedValue = this.leadFormControl.value ?? undefined;
    this.updateLeadSubscription?.unsubscribe();
    this.updateLeadSubscription = this.leadService
      .updateLead(this.leadId(), { value: normalizedValue })
      .subscribe({
        next: () => {
          this.editMode.set(false);
        },
        error: (err) => {
          console.error('Error updating lead value:', err);
        },
      });
  }

  ngOnDestroy(): void {
    this.updateLeadSubscription?.unsubscribe();
  }
}
