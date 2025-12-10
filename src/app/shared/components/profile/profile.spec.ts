import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import type { Drawer } from 'primeng/drawer';
import { of, throwError } from 'rxjs';

import type { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';
import { Profile } from './profile';

jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

describe('Profile', () => {
  const mockUserService = {
    getUser: jest.fn(),
  } satisfies Partial<UserService>;

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

      await TestBed.configureTestingModule({
        imports: [Profile, NoopAnimationsModule],
        providers: [{ provide: UserService, useValue: mockUserService }],
      }).compileComponents();

      fixture = TestBed.createComponent(Profile);
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('should open the drawer when the trigger is clicked', async () => {
      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const drawerDebug = fixture.debugElement.query(By.css('p-drawer'));
      const drawerInstance = drawerDebug.componentInstance as Drawer;
      expect(drawerInstance.visible).toBe(true);
    });

    it('should render user details inside the drawer', async () => {
      const trigger = fixture.debugElement.query(By.css('.profile-shell__trigger'));
      trigger.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();

      const nameEl = fixture.debugElement.query(By.css('.profile-drawer__name'));
      const usernameEl = fixture.debugElement.query(By.css('.profile-drawer__username-text'));

      expect(nameEl.nativeElement.textContent.trim()).toBe('Lead Lite User');
      expect(usernameEl.nativeElement.textContent.trim()).toBe('leadlite');
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
        providers: [{ provide: UserService, useValue: mockUserService }],
      }).compileComponents();

      fixture = TestBed.createComponent(Profile);
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should surface the error message', () => {
      const errorEl = fixture.debugElement.query(By.css('.profile-shell__error'));
      expect(errorEl.nativeElement.textContent.trim()).toBe('Failed to load profile.');
    });
  });
});
