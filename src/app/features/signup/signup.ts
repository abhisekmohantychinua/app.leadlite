import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { FocusTrapModule } from 'primeng/focustrap';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { UserService } from '../../core/services/user-service';
import type {
  ImageUploadChange,
  ImageUploaderState,
} from '../../shared/components/image-uploader/image-uploader';
import { ImageUploader } from '../../shared/components/image-uploader/image-uploader';
import { ThemeToggle } from '../../shared/components/theme-toggle/theme-toggle';
import { CustomValidators } from '../../shared/validators/custom-validators';

interface SignupFormValue {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  profile: Blob | null;
}

@Component({
  selector: 'app-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    MessageModule,
    AutoFocusModule,
    FocusTrapModule,
    ThemeToggle,
    ImageUploader,
    ToastModule,
    NgOptimizedImage,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export default class Signup {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  // Keep key limits centralized for template bindings and validation messages.
  protected readonly profileSizeLimitBytes = 300000;

  // Direct reference allows the component to reset the uploader after submission.
  @ViewChild(ImageUploader) profileUploader?: ImageUploader;

  // Reactive form centralizes validation rules so template logic stays terse.
  form = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      username: ['', [Validators.required, CustomValidators.username()]],
      password: ['', [Validators.required, CustomValidators.password()]],
      confirmPassword: [''],
      profile: [null as Blob | null, [Validators.required]],
    },
    { validators: CustomValidators.confirmPassword('password', 'confirmPassword') },
  );

  // Signals keep UI feedback declarative and easy to test.
  formSubmitted = signal(false);
  isSubmitting = signal(false);
  imageState = signal<ImageUploaderState>('empty');
  imageMessage = signal<string | null>(null);

  // Memoized helpers gate error messaging until the user interacts with the field.
  passwordMismatch(): boolean {
    const confirmControl = this.form.get('confirmPassword');
    if (!confirmControl) return false;
    const touched = confirmControl.touched || confirmControl.dirty || this.formSubmitted();
    return Boolean(this.form.hasError('passwordMismatch') && touched);
  }

  confirmPasswordRequired(): boolean {
    const confirmControl = this.form.get('confirmPassword');
    if (!confirmControl) return false;
    const touched = confirmControl.touched || confirmControl.dirty || this.formSubmitted();
    return Boolean(this.form.hasError('confirmRequired') && touched);
  }

  // Bridges uploader output to the `profile` form control while syncing message signals.
  handleImageChange(change: ImageUploadChange): void {
    const control = this.form.get('profile');
    if (!control) return;

    this.imageState.set(change.state);
    this.imageMessage.set(change.message);

    if (change.state === 'success' && change.file) {
      control.setValue(change.file);
      control.setErrors(null);
      control.markAsTouched();
    } else if (change.state === 'error') {
      control.setValue(null);
      control.setErrors({ uploader: true });
      control.markAsTouched();
    } else {
      control.setValue(null);
      if (this.formSubmitted()) {
        control.setErrors({ required: true });
        control.markAsTouched();
      } else {
        control.setErrors(null);
        control.markAsPristine();
      }
    }

    control.updateValueAndValidity({ emitEvent: false });
  }

  // Handles optimistic submission flow and centralizes service interaction.
  handleSignupFormSubmit(): void {
    this.formSubmitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, username, password, profile } = this.form.getRawValue() as SignupFormValue;
    if (!profile) return;

    this.isSubmitting.set(true);

    this.userService
      .createUser({
        name,
        username,
        password,
        profile,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.messageService.add({
            severity: 'success',
            summary: 'Account created',
            detail: 'You can log in now.',
          });
          this.resetForm();
          this.router.navigateByUrl('/login');
        },
        error: (error: Error) => {
          this.isSubmitting.set(false);
          this.messageService.add({
            severity: 'error',
            summary: 'Signup failed',
            detail: error?.message ?? 'Failed to create user.',
          });
        },
      });
  }

  // Shared invalid helper keeps template conditionals brief.
  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control && control.invalid && (control.touched || this.formSubmitted()));
  }

  // Reset ensures both form state and uploader preview return to defaults post success.
  private resetForm(): void {
    this.form.reset({
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      profile: null,
    });
    this.formSubmitted.set(false);
    this.imageState.set('empty');
    this.imageMessage.set(null);
    this.profileUploader?.clearSelection();
  }
}
