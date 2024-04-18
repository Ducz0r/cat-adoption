import { Route } from '@angular/router';
import { HomePageComponent } from './pages';

export const CATS_ROUTES: Route[] = [
  {
    path: '',
    component: HomePageComponent
  }
];
