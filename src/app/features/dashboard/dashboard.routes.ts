import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Home } from './home/home';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      // Additional child routes can be added here
      {
        path: '',
        component: Home,
      },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'leads',
        loadComponent: () => import('./leads/leads'),
        children: [
          {
            path: ':id',
            loadComponent: () => import('./leads/lead-detail/lead-detail'),
          },
        ],
      },
      {
        path: 'clients',
        loadComponent: () => import('./clients/clients'),
      },
      {
        path: 'projects',
        loadComponent: () => import('./projects/projects'),
      },
    ],
  },
];

export default dashboardRoutes;
