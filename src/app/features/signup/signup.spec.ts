import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';

import { UserService } from '../../core/services/user-service';
import type { ImageUploadChange } from '../../shared/components/image-uploader/image-uploader';
import Signup from './signup';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;
  let createUserMock: jest.Mock;
  let navigateMock: jest.Mock;
  let messageService: MessageService;
  let messageAddSpy: jest.SpyInstance;
  const createMockFile = (name = 'avatar.png'): File =>
    new File([new Uint8Array([1, 2, 3])], name, { type: 'image/png' });

  beforeEach(async () => {
    createUserMock = jest.fn().mockReturnValue(of(null));
    navigateMock = jest.fn();

    await TestBed.configureTestingModule({
      imports: [Signup],
      providers: [
        provideNoopAnimations(),
        { provide: UserService, useValue: { createUser: createUserMock } },
        { provide: Router, useValue: { navigateByUrl: navigateMock } },
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    messageAddSpy = jest.spyOn(messageService, 'add').mockImplementation(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit when form is invalid', () => {
    component.handleSignupFormSubmit();
    expect(createUserMock).not.toHaveBeenCalled();
  });

  it('should call user service, toast, and navigate when form is valid', () => {
    const profile = createMockFile();
    component.form.patchValue({
      name: 'Jane Doe',
      username: 'janedoe',
      password: 'passw0rd',
      confirmPassword: 'passw0rd',
    });
    emitImageChange(component, { state: 'success', file: profile, message: null });

    component.handleSignupFormSubmit();

    expect(createUserMock).toHaveBeenCalledWith({
      name: 'Jane Doe',
      username: 'janedoe',
      password: 'passw0rd',
      profile,
    });
    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'success', summary: 'Account created' }),
    );
    expect(navigateMock).toHaveBeenCalledWith('/login');
  });

  it('should show an error toast when signup fails', () => {
    createUserMock.mockReturnValueOnce(throwError(() => new Error('duplicate')));
    const profile = createMockFile();
    component.form.patchValue({
      name: 'Jane Doe',
      username: 'janedoe',
      password: 'passw0rd',
      confirmPassword: 'passw0rd',
    });
    emitImageChange(component, { state: 'success', file: profile, message: null });

    component.handleSignupFormSubmit();

    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'error', summary: 'Signup failed' }),
    );
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it('should surface uploader error on image failure', () => {
    emitImageChange(component, { state: 'error', file: null, message: 'Too large' });

    expect(component.imageState()).toBe('error');
    expect(component.imageMessage()).toBe('Too large');
    expect(component.form.get('profile')?.invalid).toBe(true);
  });

  it('should not show confirm error before interaction', () => {
    expect(component.passwordMismatch()).toBe(false);
    expect(component.confirmPasswordRequired()).toBe(false);
  });

  it('should show confirm error after mismatch interaction', () => {
    component.form.patchValue({ password: 'passw0rd', confirmPassword: 'pass123' });
    component.form.get('confirmPassword')?.markAsTouched();
    component.form.updateValueAndValidity();

    expect(component.passwordMismatch()).toBe(true);
  });

  it('should require confirm password when empty after interaction', () => {
    component.form.patchValue({ password: 'passw0rd', confirmPassword: '' });
    component.form.get('confirmPassword')?.markAsTouched();
    component.form.updateValueAndValidity();

    expect(component.confirmPasswordRequired()).toBe(true);
  });
});

const emitImageChange = (component: Signup, event: ImageUploadChange): void => {
  component.handleImageChange(event);
};
