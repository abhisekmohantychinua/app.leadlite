import { inject } from '@angular/core';
import type { CanActivateFn, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import type { Observable } from 'rxjs';
import { catchError, map, of } from 'rxjs';

import { UserService } from '../services/user-service';

/** Blocks the signup screen when a user already exists on this device. */
export const signupGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const userService = inject(UserService);
  return userService.hasExistingUser().pipe(
    // If the device already has a user, force navigation to /login instead of signup.
    map((hasUser) => (hasUser ? router.parseUrl('/login') : true)),
    // On lookup failure we pessimistically redirect to login for safety.
    catchError(() => of(router.parseUrl('/login'))),
  );
};
