import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import type { MenuItem } from 'primeng/api';
import { AutoFocus } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';

import { KeyListener } from '../../directives/key-listener';

@Component({
  selector: 'app-menu',
  imports: [
    ButtonModule,
    Drawer,
    MenuModule,
    Ripple,
    AutoFocus,
    RouterLink,
    RouterLinkActive,
    KeyListener,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  protected readonly drawerVisible = signal(true);
  private readonly router = inject(Router);
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
      shortcut: 'H',
      routerLinkActiveOptions: { exact: true },
      shortcutAction: (): void => {
        this.router.navigate(['/']);
      },
    },
    {
      label: 'Leads',
      icon: 'pi pi-inbox',
      routerLink: ['/leads'],
      shortcut: 'L',
      routerLinkActiveOptions: { exact: true },
      shortcutAction: (): void => {
        this.router.navigate(['/leads']);
      },
    },
    {
      label: 'Clients',
      icon: 'pi pi-users',
      routerLink: ['/clients'],
      shortcut: 'C',
      routerLinkActiveOptions: { exact: true },
      shortcutAction: (): void => {
        this.router.navigate(['/clients']);
      },
    },
    {
      label: 'Projects',
      icon: 'pi pi-briefcase',
      routerLink: ['/projects'],
      shortcut: 'P',
      routerLinkActiveOptions: { exact: true },
      shortcutAction: (): void => {
        this.router.navigate(['/projects']);
      },
    },
  ];

  protected openDrawer(): void {
    this.drawerVisible.set(true);
  }

  protected closeDrawer(): void {
    this.drawerVisible.set(false);
  }

  protected handleVisibilityChange(visible: boolean): void {
    this.drawerVisible.set(visible);
  }
}
