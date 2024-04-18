import { Component } from '@angular/core';
import { CatsCardsViewComponent } from '../../components/cats-cards-view/cats-cards-view.component';

@Component({
  selector: 'ca-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [CatsCardsViewComponent]
})
export class HomePageComponent {

}
