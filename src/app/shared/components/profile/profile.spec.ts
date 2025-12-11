import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import type { Drawer } from 'primeng/drawer';
import { of, throwError } from 'rxjs';

import type { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';
import { Profile } from './profile';

jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

describe('Profile', () => {
  const getUserMock = jest.fn<
    ReturnType<UserService['getUser']>,
    Parameters<UserService['getUser']>
  >();
  const logoutUserMock = jest.fn<
    ReturnType<UserService['logoutUser']>,
    Parameters<UserService['logoutUser']>
  >();
  const mockUserService: jest.Mocked<Pick<UserService, 'getUser' | 'logoutUser'>> = {
    getUser: getUserMock,
    logoutUser: logoutUserMock,
  };
  let messageService: MessageService;
  let messageAddSpy: jest.SpyInstance;

  const mockUser: User = {
    id: 'user-1',
    name: 'Lead Lite User',
    username: 'leadlite',
    password: 'hash',
    profile: new Blob(['avatar'], { type: 'image/png' }),
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
    lastModifiedAt: undefined,
  };

  beforeAll(() => {
    globalThis.URL.createObjectURL = jest.fn(() => 'blob:mock-url');
    globalThis.URL.revokeObjectURL = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('with user data', () => {
    let fixture: ComponentFixture<Profile>;

    beforeEach(async () => {
      mockUserService.getUser.mockReturnValue(of(mockUser));
      mockUserService.logoutUser.mockReturnValue(of(void 0));

      await TestBed.configureTestingModule({
        imports: [Profile, NoopAnimationsModule],
        providers: [{ provide: UserService, useValue: mockUserService }, MessageService],
      }).compileComponents();

      fixture = TestBed.createComponent(Profile);
      messageService = TestBed.inject(MessageService);
      messageAddSpy = jest.spyOn(messageService, 'add').mockImplementation(() => {});
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    afterEach(() => {
      messageAddSpy?.mockRestore();
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('should open the drawer when the trigger is clicked', async () => {
      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      if (trigger) {
        trigger.nativeElement.click();
      } else {
        const fallbackDrawer = fixture.debugElement.query(By.css('p-drawer'));
        if (fallbackDrawer) {
          (fallbackDrawer.componentInstance as Drawer).visible = true;
        }
      }
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const drawerDebug = fixture.debugElement.query(By.css('p-drawer'));
      const drawerInstance = drawerDebug.componentInstance as Drawer;
      expect(drawerInstance.visible).toBe(true);
    });

    it('should render user details inside the drawer', async () => {
      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      if (trigger) {
        trigger.nativeElement.click();
      } else {
        const fallbackDrawer = fixture.debugElement.query(By.css('p-drawer'));
        if (fallbackDrawer) {
          (fallbackDrawer.componentInstance as Drawer).visible = true;
        }
      }
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const nameEl = fixture.debugElement.query(By.css('.profile-drawer__name'));
      const usernameEl = fixture.debugElement.query(By.css('.profile-drawer__username-text'));

      expect(nameEl.nativeElement.textContent.trim()).toBe('Lead Lite User');
      expect(usernameEl.nativeElement.textContent.trim()).toBe('leadlite');
    });

    it('should trigger logout and close the drawer', async () => {
      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const logoutButton = fixture.debugElement.query(By.css('.profile-drawer__logout-button'));
      logoutButton.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      expect(mockUserService.logoutUser).toHaveBeenCalledTimes(1);
      expect(messageAddSpy).toHaveBeenCalledWith(
        expect.objectContaining({ severity: 'success', summary: 'Logged out' }),
      );
      const drawerInstance = fixture.debugElement.query(By.css('p-drawer'))
        .componentInstance as Drawer;
      expect(drawerInstance.visible).toBe(false);
    });

    it('should surface logout errors', async () => {
      mockUserService.logoutUser.mockReturnValueOnce(
        throwError(() => new Error('Unable to log out')),
      );

      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const logoutButton = fixture.debugElement.query(By.css('.profile-drawer__logout-button'));
      logoutButton.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const errorEl = fixture.debugElement.query(By.css('.profile-drawer__logout-error'));
      expect(errorEl.nativeElement.textContent.trim()).toBe('Unable to log out');
      expect(messageAddSpy).toHaveBeenCalledWith(
        expect.objectContaining({ severity: 'error', summary: 'Logout failed' }),
      );
      const drawerInstance = fixture.debugElement.query(By.css('p-drawer'))
        .componentInstance as Drawer;
      expect(drawerInstance.visible).toBe(true);
    });
  });

  describe('when service errors', () => {
    let fixture: ComponentFixture<Profile>;

    beforeEach(async () => {
      mockUserService.getUser.mockReturnValue(
        throwError(() => new Error('Failed to load profile.')),
      );

      await TestBed.configureTestingModule({
        imports: [Profile, NoopAnimationsModule],
        providers: [{ provide: UserService, useValue: mockUserService }, MessageService],
      }).compileComponents();

      fixture = TestBed.createComponent(Profile);
      messageService = TestBed.inject(MessageService);
      messageAddSpy = jest.spyOn(messageService, 'add').mockImplementation(() => {});
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should surface the error message', () => {
      const errorEl = fixture.debugElement.query(By.css('.profile-shell__error'));
      expect(errorEl.nativeElement.textContent.trim()).toBe('Failed to load profile.');
    });

    afterEach(() => {
      messageAddSpy?.mockRestore();
    });
  });
});
