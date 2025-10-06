import { Injectable } from '@angular/core';

// Define the theme type
export type ThemeType = 'light' | 'dark' | 'system' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Initialize the theme of the application.
   * The theme is determined based on the following order of preference:
   * 1. The theme stored in localStorage
   * 2. The system theme (i.e. prefers-color-scheme: dark)
   * 3. Whether it is day or night (i.e. between 6am and 6pm)
   * The theme is set on the HTML element and stored in localStorage.
   */
  initTheme(): void {
    // Extract the theme from localStorage or default to 'auto'
    const theme = localStorage.getItem('theme') || 'auto';
    const element = document.querySelector('html'); // Get the HTML element
    let isDark: boolean | undefined = undefined; // Initialize isDark to undefined

    // Switch statement to set isDark based on the theme
    switch (theme) {
      case 'light':
        isDark = false;
        break;
      case 'dark':
        isDark = true;
        break;
      case 'system':
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        break;
      default: {
        // Define theme based on whether its day or night
        const currentTime = new Date().getHours();
        isDark = currentTime >= 6 && currentTime < 18;
        break;
      }
    }

    // Set the theme of the application
    if (element) {
      if (isDark) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }

    // Set the theme in localStorage
    localStorage.setItem('theme', theme);
  }

  /**
   * Set the theme of the application.
   * @param theme The theme to set.
   */
  setTheme(theme: ThemeType): void {
    localStorage.setItem('theme', theme); // Set the theme in localStorage
    this.initTheme(); // Initialize the theme
  }
}
