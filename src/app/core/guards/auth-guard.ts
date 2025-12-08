import { inject } from '@angular/core';
import type { CanActivateFn, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import type { Observable } from 'rxjs';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserService } from '../services/user-service';

/** Protects secure routes by validating the stored session key against IndexedDB. */
export const authGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const userService = inject(UserService);
  const sessionKey = sessionStorage.getItem('sessionKey');

  // Shared helper ensures we always attempt logout before redirecting to /login.
  const redirect$ = (): Observable<UrlTree> =>
    userService.logoutUser().pipe(
      map(() => router.parseUrl('/login')),
      catchError(() => of(router.parseUrl('/login'))),
    );

  if (!sessionKey) {
    // No session in storage, so immediately send the user to login.
    return of(router.parseUrl('/login'));
  }

  return userService.validateSessionKey(sessionKey).pipe(
    switchMap((isValid) => {
      if (isValid) {
        // Session key matches the stored hash – allow navigation.
        return of(true);
      }
      // Session mismatch, clean up and redirect.
      return redirect$();
    }),
    catchError(() => redirect$()),
  );
};
