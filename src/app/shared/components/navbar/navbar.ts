import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { Menu } from '../menu/menu';
import { Profile } from '../profile/profile';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, NgOptimizedImage, ThemeToggle, Profile, ToolbarModule, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'navbar-host block w-full',
  },
})
export class Navbar {
  protected readonly logoSrc = '/Lead Lite Large Rectangle.svg';
  protected readonly menuLabel = 'Open navigation menu';
}
