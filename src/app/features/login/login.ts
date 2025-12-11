import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FloatLabel } from 'primeng/floatlabel';
import { FocusTrapModule } from 'primeng/focustrap';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PopoverModule } from 'primeng/popover';
import { ToastModule } from 'primeng/toast';

import { UserService } from '../../core/services/user-service';
import { ResetEntirely } from '../../shared/components/reset-entirely/reset-entirely';
import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';
import { CustomValidators } from '../../shared/validators/custom-validators';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    MessageModule,
    AutoFocusModule,
    FocusTrapModule,
    PopoverModule,
    DividerModule,
    ThemeToggle,
    ResetEntirely,
    ToastModule,
    NgOptimizedImage,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Login {
  private fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  private readonly destroyRef = inject(DestroyRef);
  // Central login form definition keeps validators close to the fields they protect.
  form = this.fb.group({
    username: ['', [Validators.required, CustomValidators.username()]],
    password: ['', [Validators.required, CustomValidators.password()]],
  });
  // Tracks whether the user attempted submission to gate error messaging.
  formSubmitted = signal(false);
  isSubmitting = signal(false);

  handleLoginFormSubmit(): void {
    // Flag submission so helper text becomes visible and future logic can check state.
    this.formSubmitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { username, password } = this.form.getRawValue();
    if (!username || !password) return;

    this.isSubmitting.set(true);
    this.userService
      .loginUser(username, password)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.messageService.add({
            key: 'app-toast',
            severity: 'success',
            summary: 'Login successful',
            detail: 'Redirecting you now.',
          });
          this.router.navigateByUrl('/');
        },
        error: (error: Error) => {
          this.isSubmitting.set(false);
          this.messageService.add({
            key: 'app-toast',
            severity: 'error',
            summary: 'Login failed',
            detail: error?.message ?? 'Please verify your credentials and try again.',
          });
        },
      });
  }

  isInvalid(controlName: string): boolean | undefined {
    // A control is invalid when it fails validation and was touched or the form submitted.
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
