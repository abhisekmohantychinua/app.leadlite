import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Centralized validators keep business rules consistent across auth flows.
export class CustomValidators {
  /** Enforces username constraints around spacing, allowed chars, and length. */
  static username(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const regex = /^[A-Za-z0-9_]+$/;
      if (/\s/.test(value)) return { spaceNotAllowed: true };
      if (!regex.test(value)) return { invalidChars: true };
      if (value.length < 4) return { minlength: true };
      if (value.length > 20) return { maxlength: true };
      return null;
    };
  }

  /** Requires digits, length bounds, and forbids whitespace for passwords. */
  static password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      if (/\s/.test(value)) return { spaceNotAllowed: true };
      if (!/\d/.test(value)) return { numberRequired: true };
      if (value.length < 6) return { minlength: true };
      if (value.length > 12) return { maxlength: true };
      return null;
    };
  }

  /** Validates that the confirm field exists and mirrors the source password control. */
  static confirmPassword(passwordControlName: string, confirmControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const passwordControl = group.get?.(passwordControlName);
      const confirmControl = group.get?.(confirmControlName);
      if (!passwordControl || !confirmControl) return null;

      const errors: ValidationErrors = {};
      const passwordValue = passwordControl.value as string | null;
      const confirmValue = confirmControl.value as string | null;

      if (!confirmValue) {
        errors['confirmRequired'] = true;
      } else if (passwordValue !== confirmValue) {
        errors['passwordMismatch'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }
}
