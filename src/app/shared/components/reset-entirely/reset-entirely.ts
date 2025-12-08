import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { DexieRepository } from '../../../core/repository/dexie-repository';

@Component({
  selector: 'app-reset-entirely',
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    MessageModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  templateUrl: './reset-entirely.html',
  styleUrl: './reset-entirely.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'reset-entirely',
  },
})
export class ResetEntirely {
  private readonly dexieRepository = inject(DexieRepository);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  protected readonly confirmationPhrase = 'reset-entirely';

  // Dialog signals keep template logic declarative.
  dialogVisible = signal(false);
  confirmationValue = signal('');
  isConfirming = signal(false);
  dialogError = signal<string | null>(null);

  // Only enable confirm when the destructive phrase matches exactly.
  canConfirm = computed(() => this.confirmationValue().trim() === this.confirmationPhrase);

  openDialog(): void {
    this.dialogVisible.set(true);
    this.confirmationValue.set('');
    this.dialogError.set(null);
  }

  handleInput(value: string): void {
    this.confirmationValue.set(value);
  }

  cancel(): void {
    if (this.isConfirming()) return;
    this.dialogVisible.set(false);
    this.confirmationValue.set('');
    this.dialogError.set(null);
  }

  async confirmReset(): Promise<void> {
    if (!this.canConfirm() || this.isConfirming()) return;

    this.isConfirming.set(true);
    this.dialogError.set(null);

    try {
      await this.dexieRepository.resetAllData();
      sessionStorage.clear();
      this.messageService.add({
        severity: 'success',
        summary: 'Reset complete',
        detail: 'All local data has been removed. Redirecting to signup.',
      });
      this.dialogVisible.set(false);
      void this.router.navigateByUrl('/signup');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to reset application data.';
      this.dialogError.set(message);
      this.messageService.add({
        severity: 'error',
        summary: 'Reset failed',
        detail: message,
      });
    } finally {
      this.isConfirming.set(false);
      this.confirmationValue.set('');
    }
  }
}
