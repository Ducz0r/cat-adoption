import { Component, Input } from '@angular/core';
import { Cat } from '../../models';

@Component({
  selector: 'ca-cats-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input()
  public cat: Cat = new Cat();

  public get ageText(): string {
    return `${this.cat.age} years old`;
  }
}
