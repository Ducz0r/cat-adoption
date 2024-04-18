import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/error-pages';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/routes').then(m => m.CATS_ROUTES)
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
