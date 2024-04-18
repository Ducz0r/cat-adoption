import { Component } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';

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

  public cats: Cat[] = [
    new Cat({
      name: 'Fluffy',
      breed: 'Persian',
      age: 3,
      image: 'assets/fluffy.jpg'
    }),
    new Cat({
      name: 'Whiskers',
      breed: 'Siamese',
      age: 2,
      image: 'assets/whiskers.jpg'
    }),
    new Cat({
      name: 'Socks',
      breed: 'Calico',
      age: 1,
      image: 'assets/socks.jpg'
    })
  ]
}
