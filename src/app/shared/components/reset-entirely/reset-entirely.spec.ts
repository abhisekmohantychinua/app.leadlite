import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';

import { DexieRepository } from '../../../core/repository/dexie-repository';
import { ResetEntirely } from './reset-entirely';

describe('ResetEntirely', () => {
  let fixture: ComponentFixture<ResetEntirely>;
  let component: ResetEntirely;
  let resetSpy: jest.MockedFunction<DexieRepository['resetAllData']>;
  let router: Router;
  let navigateSpy: jest.SpyInstance;
  let messageService: MessageService;
  let messageAddSpy: jest.SpyInstance;

  beforeEach(async () => {
    resetSpy = jest.fn().mockResolvedValue(undefined);

    await TestBed.configureTestingModule({
      imports: [ResetEntirely, RouterTestingModule],
      providers: [
        provideNoopAnimations(),
        MessageService,
        {
          provide: DexieRepository,
          useValue: {
            resetAllData: resetSpy,
          } satisfies Partial<DexieRepository>,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetEntirely);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    messageService = TestBed.inject(MessageService);
    navigateSpy = jest.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    messageAddSpy = jest.spyOn(messageService, 'add').mockImplementation(() => {});
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should disable confirm button until the phrase matches', () => {
    component.openDialog();
    fixture.detectChanges();

    const confirmButton = getConfirmButton(fixture);
    expect(confirmButton.disabled).toBe(true);

    component.handleInput('reset-entirely');
    fixture.detectChanges();

    expect(confirmButton.disabled).toBe(false);
  });

  it('should call Dexie reset and clear sessionStorage on confirm', async () => {
    sessionStorage.setItem('sessionKey', 'demo');
    component.openDialog();
    component.handleInput('reset-entirely');
    fixture.detectChanges();

    getConfirmButton(fixture).click();
    fixture.detectChanges();

    expect(component.isConfirming()).toBe(true);

    await fixture.whenStable();
    fixture.detectChanges();

    expect(resetSpy).toHaveBeenCalledTimes(1);
    expect(sessionStorage.getItem('sessionKey')).toBeNull();
    expect(component.dialogVisible()).toBe(false);
    expect(component.isConfirming()).toBe(false);
    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'success', summary: 'Reset complete' }),
    );
    expect(navigateSpy).toHaveBeenCalledWith('/signup');
  });

  it('should surface errors without closing the dialog', async () => {
    resetSpy.mockRejectedValueOnce(new Error('reset failed'));

    component.openDialog();
    component.handleInput('reset-entirely');
    fixture.detectChanges();

    getConfirmButton(fixture).click();
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.dialogVisible()).toBe(true);
    const errorMessage = fixture.nativeElement.querySelector('[data-testid="reset-error"]');
    expect(errorMessage?.textContent).toContain('reset failed');
    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'error', summary: 'Reset failed' }),
    );
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});

const getConfirmButton = (fixture: ComponentFixture<ResetEntirely>): HTMLButtonElement =>
  fixture.nativeElement.querySelector('[data-testid="reset-confirm"]');
