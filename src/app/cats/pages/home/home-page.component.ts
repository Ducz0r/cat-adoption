import { Component } from '@angular/core';
import { CardsViewComponent } from '../../components';

@Component({
  selector: 'ca-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [
    CardsViewComponent
  ]
})
export class HomePageComponent {

}
