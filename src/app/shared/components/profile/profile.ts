import type { OnDestroy } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Drawer } from 'primeng/drawer';
import type { Subscription } from 'rxjs';
import { catchError, of } from 'rxjs';

import type { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';

const PROFILE_DATE_FORMATTER = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
});

@Component({
  selector: 'app-profile',
  imports: [ButtonModule, Avatar, Drawer, CardModule, DividerModule],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'profile-component',
  },
})
export class Profile implements OnDestroy {
  private readonly userService = inject(UserService);
  private readonly messageService = inject(MessageService);
  private logoutSubscription: Subscription | null = null;

  protected readonly sidebarVisible = signal(false);
  protected readonly errorSig = signal<string | null>(null);
  protected readonly logoutErrorSig = signal<string | null>(null);
  protected readonly avatarSrcSig = signal<string | null>(null);
  protected readonly isLoggingOut = signal(false);
  protected readonly router = inject(Router);

  protected readonly userSig = toSignal<User | null>(
    this.userService.getUser().pipe(
      catchError((error: unknown) => {
        const message = error instanceof Error ? error.message : 'Failed to load profile.';
        this.errorSig.set(message);
        return of(null);
      }),
    ),
    { initialValue: null },
  );

  protected readonly initialsSig = computed(() => {
    const user = this.userSig();
    if (!user) return '?';

    const nameInitials = user.name
      .split(' ')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase())
      .filter(Boolean)
      .slice(0, 2)
      .join('');

    if (nameInitials) return nameInitials;
    return user.username.charAt(0).toUpperCase() || '?';
  });

  protected readonly triggerLabelSig = computed(() => {
    const user = this.userSig();
    return user ? `Open profile for ${user.name}` : 'Open profile panel';
  });

  protected readonly profileMetaSig = computed(() => {
    const user = this.userSig();
    if (!user) return null;

    return {
      createdAtLabel: PROFILE_DATE_FORMATTER.format(user.createdAt),
      updatedAtLabel: user.lastModifiedAt
        ? PROFILE_DATE_FORMATTER.format(user.lastModifiedAt)
        : null,
    } as const;
  });

  constructor() {
    effect(() => {
      const user = this.userSig();
      if (!user?.profile) {
        this.avatarSrcSig.set(null);
        return;
      }

      const nextUrl = URL.createObjectURL(user.profile);
      this.avatarSrcSig.set(nextUrl);

      return (): void => URL.revokeObjectURL(nextUrl);
    });
  }

  ngOnDestroy(): void {
    this.logoutSubscription?.unsubscribe();
    this.logoutSubscription = null;
  }

  protected openSidebar(): void {
    if (this.errorSig()) return;
    this.sidebarVisible.set(true);
  }

  protected closeSidebar(): void {
    this.sidebarVisible.set(false);
  }

  protected handleVisibilityChange(visible: boolean): void {
    this.sidebarVisible.set(visible);
  }

  protected handleLogout(): void {
    this.logoutSubscription?.unsubscribe();
    this.logoutSubscription = null;
    this.logoutErrorSig.set(null);
    this.isLoggingOut.set(true);

    this.logoutSubscription = this.userService.logoutUser().subscribe({
      next: () => {
        this.isLoggingOut.set(false);
        this.closeSidebar();
        this.messageService.add({
          key: 'app-toast',
          severity: 'success',
          summary: 'Logged out',
          detail: 'Your session has ended.',
          life: 3000,
        });
        this.router.navigate(['/login']);
      },
      error: (error: unknown) => {
        const message = error instanceof Error ? error.message : 'Failed to log out.';
        this.isLoggingOut.set(false);
        this.logoutErrorSig.set(message);
        this.messageService.add({
          key: 'app-toast',
          severity: 'error',
          summary: 'Logout failed',
          detail: message,
        });
      },
      complete: () => {
        this.logoutSubscription = null;
      },
    });
  }
}
