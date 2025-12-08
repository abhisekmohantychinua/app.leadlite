import { inject } from '@angular/core';
import type { CanActivateFn, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import type { Observable } from 'rxjs';
import { catchError, map, of } from 'rxjs';

import { UserService } from '../services/user-service';

/** Prevents authenticated users from revisiting the login screen. */
export const loginGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const userService = inject(UserService);
  const sessionKey = sessionStorage.getItem('sessionKey');

  if (sessionKey) {
    return of(router.parseUrl('/'));
  }

  // When no active session exists, ensure at least one user profile is stored.
  return userService.hasExistingUser().pipe(
    map((hasUser) => (hasUser ? true : router.parseUrl('/signup'))),
    catchError(() => of(router.parseUrl('/signup'))),
  );
};
