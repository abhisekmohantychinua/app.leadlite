import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ThemeService } from '../../../core/services/theme-service';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle Integration', () => {
  let fixture: ComponentFixture<ThemeToggle>;
  let component: ThemeToggle;
  let themeService: ThemeService;

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');

    await TestBed.configureTestingModule({
      imports: [ThemeToggle],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    themeService = TestBed.inject(ThemeService);
    themeService.initTheme();
    fixture = TestBed.createComponent(ThemeToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    cleanupMenus();
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should show the current theme label on the trigger button', () => {
    const trigger = getTriggerButton();
    expect(trigger.textContent?.trim()).toContain('Auto');
  });

  it('should open the popup menu when clicked', async () => {
    await openMenu();
    expect(getMenuOverlay()).toBeTruthy();
  });

  it('should switch to Dark mode when the menu item is selected', async () => {
    localStorage.setItem('theme', 'light');
    themeService.initTheme();
    fixture.detectChanges();

    const darkItem = component.menuItems.find((item) => item.label === 'Dark');
    expect(darkItem).toBeTruthy();
    darkItem?.command?.({} as never);
    await waitForCondition(() => localStorage.getItem('theme') === 'dark');
    await waitForCondition(() => component.selectedMenuSig().label === 'Dark');

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(getTriggerButton().textContent).toContain('Dark');
  });

  const getTriggerButton = (): HTMLButtonElement => fixture.nativeElement.querySelector('button');

  const openMenu = async (): Promise<void> => {
    getTriggerButton().click();
    fixture.detectChanges();
    await waitForCondition(() => Boolean(getMenuOverlay()));
  };

  const getMenuOverlay = (): HTMLElement | null => document.body.querySelector('.p-menu');

  const cleanupMenus = (): void => {
    document.body.querySelectorAll('.p-menu').forEach((overlay) => overlay.remove());
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
});
