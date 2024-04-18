import { Component, Input } from '@angular/core';
import { Cat } from '../../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ca-cats-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class CardComponent {
  @Input()
  public cat: Cat = new Cat();

  public get ageText(): string {
    return `${this.cat.age} years old`;
  }
}
