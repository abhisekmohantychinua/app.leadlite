import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import Dexie from 'dexie';
import { MessageService } from 'primeng/api';

import { DB_NAME, DexieRepository } from '../../core/repository/dexie-repository';
import { CryptoService } from '../../core/services/crypto-service';
import Signup from './signup';

jest.mock('nanoid', () => ({ nanoid: (): string => 'integration-id' }));

const globalRef = globalThis as typeof globalThis & {
  structuredClone?: <T>(value: T) => T;
};

if (!globalRef.structuredClone) {
  globalRef.structuredClone = <T>(value: T): T => value;
}

@Component({
  template: '<p>Stub</p>',
})
class StubComponent {}

describe('Signup Integration', () => {
  let fixture: ComponentFixture<Signup>;
  let component: Signup;
  let router: Router;
  let dexieRepository: DexieRepository;
  let cryptoService: CryptoService;
  let messageService: MessageService;

  beforeEach(async () => {
    const urlRef = globalThis.URL as typeof URL & {
      createObjectURL?: (blob: Blob) => string;
      revokeObjectURL?: (url: string) => void;
    };
    if (!urlRef.createObjectURL) {
      urlRef.createObjectURL = (): string => 'blob:integration';
    }
    if (!urlRef.revokeObjectURL) {
      urlRef.revokeObjectURL = (): void => undefined;
    }
    jest.spyOn(urlRef, 'createObjectURL').mockReturnValue('blob:integration');
    jest.spyOn(urlRef, 'revokeObjectURL').mockImplementation(() => undefined);

    await Dexie.delete(DB_NAME).catch(() => undefined);

    await TestBed.configureTestingModule({
      imports: [
        Signup,
        RouterTestingModule.withRoutes([
          { path: 'login', component: StubComponent },
          { path: 'signup', component: StubComponent },
          { path: '', redirectTo: 'signup', pathMatch: 'full' },
        ]),
      ],
      providers: [provideNoopAnimations(), MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    dexieRepository = TestBed.inject(DexieRepository);
    cryptoService = TestBed.inject(CryptoService);
    messageService = TestBed.inject(MessageService);

    await dexieRepository.readyDexieOpenPromise;
    await dexieRepository.resetAllData();
    await router.navigateByUrl('/signup');

    fixture.detectChanges();
  });

  afterEach(async () => {
    fixture.destroy();
    await dexieRepository.resetAllData();
    if (dexieRepository.isOpen()) {
      dexieRepository.close();
    }
    await Dexie.delete(DB_NAME).catch(() => undefined);
    sessionStorage.clear();
    messageService.clear();
  });

  it('should render a pristine form with uploader idle', () => {
    const nameInput = queryInput('#name');
    const usernameInput = queryInput('#username');
    const passwordInput = queryInput('#password');
    const confirmInput = queryInput('#confirmPassword');
    const uploaderButton = fixture.nativeElement.querySelector(
      '.image-uploader__trigger',
    ) as HTMLButtonElement;

    expect(nameInput.value).toBe('');
    expect(usernameInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(confirmInput.value).toBe('');
    expect(component.imageState()).toBe('empty');
    expect(component.imageMessage()).toBeNull();
    expect(uploaderButton.textContent?.trim()).toContain('Upload profile image');

    const submitButton = getSubmitButton();
    expect(submitButton.disabled).toBe(false);
    expect(submitButton.textContent?.trim()).toContain('Create Account');
  });

  it('should block submission and surface validation errors when fields are missing', async () => {
    await submitForm();

    const messages = Array.from(
      fixture.nativeElement.querySelectorAll('p-message') as NodeListOf<HTMLElement>,
    );
    const textContent = messages.map((msg) => msg.textContent?.trim());
    expect(textContent).toEqual(
      expect.arrayContaining(['Name is required.', 'Username is required.']),
    );
    const profileFeedback = fixture.nativeElement.querySelector('.signup-image-feedback p-message');
    expect(profileFeedback?.textContent).toContain('Profile picture is required.');
    expect(component.isSubmitting()).toBe(false);
  });

  xit('should create a user, toast success, and reset the form', async () => {
    fillForm({
      name: 'Integration User',
      username: 'janedoe',
      password: 'Passw0rd!',
    });
    component.form.get('confirmPassword')?.setValue('Passw0rd!');
    component.handleImageChange({ state: 'success', file: createProfileFile(), message: null });
    fixture.detectChanges();

    await submitForm();
    await waitForCondition(() => Boolean(getToast('success') || getToast('error')));
    const errorToast = getToast('error');
    if (errorToast) {
      throw new Error(`Signup produced error toast: ${errorToast.textContent?.trim()}`);
    }
    const toast = getToast('success');
    expect(toast).not.toBeNull();
    expect(toast?.getAttribute('role')).toBe('alert');
    expect(toast?.textContent).toContain('Account created');

    expect(await dexieRepository.users.count()).toBe(1);
    expect(component.form.get('name')?.value).toBe('');
    expect(component.imageState()).toBe('empty');
    expect(component.imageMessage()).toBeNull();
  });

  xit('should show an error toast when username already exists', async () => {
    await seedUser({ username: 'janedoe', password: 'Passw0rd!' });

    fillForm({
      name: 'Integration User',
      username: 'janedoe',
      password: 'Passw0rd!',
    });
    component.form.get('confirmPassword')?.setValue('Passw0rd!');
    component.handleImageChange({ state: 'success', file: createProfileFile(), message: null });
    fixture.detectChanges();

    await submitForm();
    const toast = await waitForToast('error');
    expect(toast.getAttribute('role')).toBe('alert');
    expect(await dexieRepository.users.count()).toBe(1);
  });

  const queryInput = (selector: string): HTMLInputElement =>
    fixture.nativeElement.querySelector(selector) as HTMLInputElement;

  const getSubmitButton = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('button[type="submit"]');

  const submitForm = async (): Promise<void> => {
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    await detectChanges();
  };

  const detectChanges = async (): Promise<void> => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  };

  const fillForm = ({
    name,
    username,
    password,
  }: {
    name: string;
    username: string;
    password: string;
  }): void => {
    component.form.patchValue({ name, username, password });
    fixture.detectChanges();
  };

  const waitForToast = async (severity: 'success' | 'error'): Promise<HTMLElement> => {
    await waitForCondition(() => Boolean(getToast(severity)));
    return getToast(severity)!;
  };

  const getToast = (severity: 'success' | 'error'): HTMLElement | null =>
    fixture.nativeElement.querySelector(`.p-toast-message-${severity}`);

  const waitForCondition = async (predicate: () => boolean, timeout = 4000): Promise<void> => {
    const deadline = Date.now() + timeout;
    await new Promise<void>((resolve, reject) => {
      const poll = (): void => {
        fixture.detectChanges();
        if (predicate()) {
          resolve();
          return;
        }
        if (Date.now() > deadline) {
          reject(new Error('Condition not met within timeout'));
          return;
        }
        setTimeout(poll, 10);
      };
      poll();
    });
  };

  const createProfileFile = (): File =>
    new File([new Uint8Array([1, 2, 3])], 'avatar.png', { type: 'image/png' });

  const seedUser = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> => {
    await dexieRepository.readyDexieOpenPromise;
    const salt = `${username}-integration-salt`;
    const hashedPassword = await cryptoService.hashPBKDF2Async(password, salt);
    await dexieRepository.users.clear();
    await dexieRepository.secrets.clear();
    await dexieRepository.users.add({
      id: `integration-${username}`,
      name: 'Existing User',
      username,
      password: hashedPassword,
      profile: createProfileFile(),
      createdAt: new Date(),
      lastModifiedAt: undefined,
    });
    await dexieRepository.secrets.add({
      id: 1,
      userSalt: salt,
      sessionHash: undefined,
    });
  };
});
