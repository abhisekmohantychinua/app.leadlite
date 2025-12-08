import { Component, computed, inject } from '@angular/core';
import type { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';

import { ThemeService } from '../../../core/services/theme-service';

@Component({
  selector: 'app-theme-toggle',
  imports: [Menu, ButtonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  // Inject ThemeService and get the current theme
  private themeService = inject(ThemeService);
  private currentThemeSig = this.themeService.getCurrentTheme();

  // Define a selected menu for the button
  selectedMenuSig = computed(() => {
    return (
      // Find the menu item with the same label as the current theme else use the first menu item
      this.menuItems.filter(
        (menuItem) => menuItem.label?.toLowerCase() === this.currentThemeSig(),
      )[0] || this.menuItems[0]
    );
  });

  // Define the menu items
  menuItems: MenuItem[] = [
    {
      label: 'Light',
      icon: PrimeIcons.SUN,
      command: (): void => this.themeService.setTheme('light'),
    },
    {
      label: 'Dark',
      icon: PrimeIcons.MOON,
      command: (): void => this.themeService.setTheme('dark'),
    },
    {
      label: 'System',
      icon: PrimeIcons.DESKTOP,
      command: (): void => this.themeService.setTheme('system'),
    },
    {
      label: 'Auto',
      icon: PrimeIcons.COG,
      command: (): void => this.themeService.setTheme('auto'),
    },
  ];
}
