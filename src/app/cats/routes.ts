import { Routes } from '@angular/router';
import { IndexPageComponent, CatDetailsPageComponent } from './pages';

export const CATS_ROUTES: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: ':id',
    component: CatDetailsPageComponent
  }
];
