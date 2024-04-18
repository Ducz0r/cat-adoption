import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatCardComponent, CatsCardsViewComponent } from './components';
import { HomePageComponent } from './pages';
import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CatsRoutingModule,
    CatCardComponent,
    CatsCardsViewComponent,
    HomePageComponent
  ]
})
export class CatsModule { }
