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
import Login from './login';

jest.mock('nanoid', () => ({ nanoid: (): string => 'integration-id' }));

const globalRef = globalThis as typeof globalThis & {
  structuredClone?: <T>(value: T) => T;
};

if (!globalRef.structuredClone) {
  globalRef.structuredClone = <T>(value: T): T => value;
}

@Component({
  template: '<p>Dashboard</p>',
})
class DashboardStub {}

describe('Login Integration', () => {
  let fixture: ComponentFixture<Login>;
  let component: Login;
  let router: Router;
  let messageService: MessageService;
  let dexieRepository: DexieRepository;
  let cryptoService: CryptoService;

  beforeEach(async () => {
    await Dexie.delete(DB_NAME).catch(() => undefined);

    await TestBed.configureTestingModule({
      imports: [
        Login,
        RouterTestingModule.withRoutes([
          { path: '', component: DashboardStub },
          { path: 'login', component: DashboardStub },
        ]),
      ],
      providers: [provideNoopAnimations(), MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    messageService = TestBed.inject(MessageService);
    dexieRepository = TestBed.inject(DexieRepository);
    cryptoService = TestBed.inject(CryptoService);
    await dexieRepository.readyDexieOpenPromise;
    await dexieRepository.resetAllData();
    await router.navigateByUrl('/login');
    fixture.detectChanges();
  });

  afterEach(async () => {
    fixture.destroy();
    if (dexieRepository) {
      await dexieRepository.resetAllData();
      if (dexieRepository.isOpen()) {
        dexieRepository.close();
      }
    }
    await Dexie.delete(DB_NAME).catch(() => undefined);
    sessionStorage.clear();
    messageService?.clear();
  });

  it('should render a pristine, accessible form state', () => {
    const usernameInput = fixture.nativeElement.querySelector('#username') as HTMLInputElement;
    const usernameLabel = fixture.nativeElement.querySelector('label[for="username"]');
    const passwordInput = fixture.nativeElement.querySelector('#password') as HTMLInputElement;
    const passwordLabel = fixture.nativeElement.querySelector('label[for="password"]');

    expect(usernameInput?.value).toBe('');
    expect(passwordInput?.value).toBe('');
    expect(usernameLabel?.textContent?.trim()).toBe('Username');
    expect(passwordLabel?.textContent?.trim()).toBe('Password');

    const submitButton = getSubmitButton();
    expect(submitButton.disabled).toBe(false);
    expect(submitButton.textContent?.trim()).toContain('Submit');
  });

  it('should block submission and surface validation errors when invalid', async () => {
    getSubmitButton().click();
    await detectChanges();

    const messages = fixture.nativeElement.querySelectorAll('p-message');
    expect(messages.length).toBeGreaterThan(0);
    expect(sessionStorage.getItem('sessionKey')).toBeNull();
  });

  xit('should log in an existing user, announce success, and navigate home', async () => {
    await seedUser({ username: 'janedoe', password: 'Passw0rd!' });

    setFieldValue('username', 'janedoe');
    setFieldValue('password', 'Passw0rd!');

    await submitForm();
    await waitForCondition(() => Boolean(sessionStorage.getItem('sessionKey')));

    const toast = await waitForToast('success');
    expect(toast.getAttribute('role')).toBe('alert');
    await waitForCondition(() => router.url === '/');
  });

  xit('should show an error toast when credentials are incorrect', async () => {
    await seedUser({ username: 'janedoe', password: 'Passw0rd!' });

    setFieldValue('username', 'janedoe');
    setFieldValue('password', 'wrongpass1');

    await submitForm();
    const toast = await waitForToast('error');
    expect(toast.getAttribute('role')).toBe('alert');
    expect(sessionStorage.getItem('sessionKey')).toBeNull();
    await waitForCondition(() => router.url === '/login');
  });

  it('should disable the submit action while a request is in-flight', async () => {
    await seedUser({ username: 'janedoe', password: 'Passw0rd!' });

    setFieldValue('username', 'janedoe');
    setFieldValue('password', 'Passw0rd!');

    const button = getSubmitButton();
    button.click();
    fixture.detectChanges();

    expect(component.isSubmitting()).toBe(true);
    expect(button.disabled).toBe(true);

    await flushAsyncOperations();
  });

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

  const flushAsyncOperations = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    await detectChanges();
  };

  const waitForCondition = async (predicate: () => boolean, timeout = 2000): Promise<void> => {
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
      name: 'Integration User',
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

    const storedUser = await dexieRepository.users.where('username').equals(username).first();
    const storedSecret = await dexieRepository.secrets.get(1);
    if (!storedUser || !storedSecret?.userSalt) {
      throw new Error('Failed to seed user data for integration test');
    }

    const verificationHash = await cryptoService.hashPBKDF2Async(password, storedSecret.userSalt);
    if (storedUser.password !== verificationHash) {
      throw new Error('Seeded credentials do not match stored salt');
    }
  };

  const getSubmitButton = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('button.login-submit-button');

  const setFieldValue = (controlName: 'username' | 'password', value: string): void => {
    component.form.get(controlName)?.setValue(value);
    component.form.get(controlName)?.markAsDirty();
    fixture.detectChanges();
  };

  const getToast = (severity: 'success' | 'error'): HTMLElement | null =>
    fixture.nativeElement.querySelector(`.p-toast-message-${severity}`);

  const waitForToast = async (severity: 'success' | 'error'): Promise<HTMLElement> => {
    await waitForCondition(() => Boolean(getToast(severity)));
    return getToast(severity)!;
  };

  const createProfileFile = (): File =>
    new File([new Uint8Array([1, 2, 3])], 'avatar.png', { type: 'image/png' });
});
