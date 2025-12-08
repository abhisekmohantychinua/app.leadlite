import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Home } from './home/home';
import { Profile } from './profile/profile';

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
        path: 'profile',
        component: Profile,
      },
    ],
  },
];

export default dashboardRoutes;
