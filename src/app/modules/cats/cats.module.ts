import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatCardComponent, CatsCardsViewComponent } from './components';
import { HomePageComponent } from './pages';
import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  declarations: [
    CatCardComponent,
    CatsCardsViewComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
