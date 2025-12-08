import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import Dexie from 'dexie';
import { MessageService } from 'primeng/api';

import { DB_NAME, DexieRepository } from '../../../core/repository/dexie-repository';
import { ResetEntirely } from './reset-entirely';

const globalRef = globalThis as typeof globalThis & {
  structuredClone?: <T>(value: T) => T;
};

if (!globalRef.structuredClone) {
  globalRef.structuredClone = <T>(value: T): T => value;
}

@Component({
  template: '<p>Signup Stub</p>',
})
class SignupStub {}

describe('ResetEntirely Integration', () => {
  let fixture: ComponentFixture<ResetEntirely>;
  let component: ResetEntirely;
  let dexieRepository: DexieRepository;
  let router: Router;
  let messageService: MessageService;

  beforeEach(async () => {
    await Dexie.delete(DB_NAME).catch(() => undefined);

    await TestBed.configureTestingModule({
      imports: [
        ResetEntirely,
        RouterTestingModule.withRoutes([
          { path: 'signup', component: SignupStub },
          { path: '', redirectTo: 'signup', pathMatch: 'full' },
        ]),
      ],
      providers: [provideNoopAnimations(), MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetEntirely);
    component = fixture.componentInstance;
    dexieRepository = TestBed.inject(DexieRepository);
    router = TestBed.inject(Router);
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

  it('should render the destructive trigger with dialog hidden by default', () => {
    const trigger = getTriggerButton();
    expect(trigger.textContent?.trim()).toBe('Reset Entirely');
    expect(component.dialogVisible()).toBe(false);
    expect(component.canConfirm()).toBe(false);
  });

  it('should enable confirmation only when the phrase matches', () => {
    component.openDialog();
    fixture.detectChanges();

    const confirmButton = getConfirmButton();
    expect(confirmButton.disabled).toBe(true);

    typeConfirmation('reset-entirely');
    fixture.detectChanges();
    expect(confirmButton.disabled).toBe(false);
  });

  it('should wipe Dexie data, clear session, and navigate after confirming', async () => {
    await seedData();
    sessionStorage.setItem('sessionKey', 'reset-me');

    component.openDialog();
    fixture.detectChanges();

    typeConfirmation('reset-entirely');
    fixture.detectChanges();

    const confirmButton = getConfirmButton();
    confirmButton.click();
    fixture.detectChanges();

    expect(component.isConfirming()).toBe(true);

    const toast = await waitForToast('success');
    expect(toast.getAttribute('role')).toBe('alert');
    await waitForCondition(() => router.url === '/signup');

    expect(await dexieRepository.users.count()).toBe(0);
    expect(await dexieRepository.secrets.count()).toBe(0);
    expect(sessionStorage.getItem('sessionKey')).toBeNull();
    expect(component.dialogVisible()).toBe(false);
    expect(component.isConfirming()).toBe(false);
  });

  const getTriggerButton = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('.reset-entirely__trigger');

  const getConfirmButton = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('[data-testid="reset-confirm"]');

  const getInput = (): HTMLInputElement =>
    fixture.nativeElement.querySelector('#reset-confirmation');

  const typeConfirmation = (value: string): void => {
    const input = getInput();
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const waitForToast = async (severity: 'success' | 'error'): Promise<HTMLElement> => {
    await waitForCondition(() => Boolean(getToast(severity)));
    return getToast(severity)!;
  };

  const getToast = (severity: 'success' | 'error'): HTMLElement | null =>
    fixture.nativeElement.querySelector(`.p-toast-message-${severity}`);

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

  const seedData = async (): Promise<void> => {
    await dexieRepository.readyDexieOpenPromise;
    await dexieRepository.users.clear();
    await dexieRepository.secrets.clear();
    await dexieRepository.users.add({
      id: 'user-1',
      name: 'Existing',
      username: 'existing',
      password: 'hashed',
      profile: new File([new Uint8Array([1])], 'avatar.png', { type: 'image/png' }),
      createdAt: new Date(),
      lastModifiedAt: undefined,
    });
    await dexieRepository.secrets.add({ id: 1, userSalt: 'salt', sessionHash: 'hash' });
  };
});
