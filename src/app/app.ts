import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';

import { ThemeService } from './core/services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  private router = inject(Router);

  ngOnInit(): void {
    this.themeService.initTheme();
    this.consumeGithubRedirectParam();
  }

  private consumeGithubRedirectParam(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const url = new URL(window.location.href);
    const redirectTarget = url.searchParams.get('gh_redirect');
    if (!redirectTarget) {
      return;
    }

    url.searchParams.delete('gh_redirect');
    const cleanSearch = url.searchParams.toString();
    const cleanUrl = `${url.pathname}${cleanSearch ? `?${cleanSearch}` : ''}${url.hash}`;
    window.history.replaceState(null, '', cleanUrl);

    try {
      const decodedTarget = decodeURIComponent(redirectTarget);
      const normalizedTarget = decodedTarget.startsWith('/') ? decodedTarget : `/${decodedTarget}`;
      this.router.navigateByUrl(normalizedTarget, { replaceUrl: true });
    } catch (error) {
      console.error('Failed to process GitHub redirect parameter', error);
    }
  }
}
