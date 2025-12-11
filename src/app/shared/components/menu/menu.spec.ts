import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import type { Drawer } from 'primeng/drawer';

import { Menu } from './menu';

describe('Menu', () => {
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu, NoopAnimationsModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should keep the drawer visible by default', () => {
    const drawerRef = fixture.debugElement.query(By.css('p-drawer'));
    const drawerInstance = drawerRef.componentInstance as Drawer;
    expect(drawerInstance.visible).toBe(true);
  });

  it('should reopen the drawer when the trigger is clicked', async () => {
    fixture.componentInstance['drawerVisible'].set(false);
    fixture.detectChanges();

    const trigger = fixture.debugElement.query(By.css('.menu__trigger'));
    trigger.nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const drawerRef = fixture.debugElement.query(By.css('p-drawer'));
    const drawerInstance = drawerRef.componentInstance as Drawer;
    expect(drawerInstance.visible).toBe(true);
  });

  it('should render all menu entries with shortcuts', () => {
    const items = fixture.debugElement.queryAll(By.css('.menu__item'));
    expect(items).toHaveLength(4);

    const shortcuts = fixture.debugElement.queryAll(By.css('.menu__shortcut'));
    expect(shortcuts.map((shortcut) => shortcut.nativeElement.textContent.trim())).toEqual(
      expect.arrayContaining(['H', 'L', 'C', 'P']),
    );
  });
});
