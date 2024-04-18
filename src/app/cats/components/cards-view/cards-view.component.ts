import { Component } from '@angular/core';
import { CardComponent } from '..';

@Component({
  selector: 'ca-cats-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrl: './cards-view.component.scss',
  standalone: true,
  imports: [
    CardComponent
  ]
})
export class CardsViewComponent {

}
