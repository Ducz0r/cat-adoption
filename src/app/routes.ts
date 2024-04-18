import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/routes').then(m => m.CATS_ROUTES)
  }
];
