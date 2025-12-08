import { Routes } from '@angular/router';

import { loginGuard } from './core/guards/login-guard';
import { signupGuard } from './core/guards/signup-guard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./features/dashboard/dashboard.routes'),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login'),
    pathMatch: 'full',
    canActivate: [loginGuard],
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/signup/signup'),
    pathMatch: 'full',
    canActivate: [signupGuard],
  },
];
