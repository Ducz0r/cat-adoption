import { Component } from '@angular/core';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'ca-cats-cards-view',
  templateUrl: './cats-cards-view.component.html',
  styleUrl: './cats-cards-view.component.scss',
  standalone: true,
  imports: [CatCardComponent]
})
export class CatsCardsViewComponent {

}
