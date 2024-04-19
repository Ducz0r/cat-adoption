import { Component, Input } from '@angular/core';
import { Cat } from '../../models';
import { RouterModule } from '@angular/router';
import { AgeToYearsOldPipe } from '../../pipes';

@Component({
  selector: 'ca-cats-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    AgeToYearsOldPipe
  ]
})
export class CardComponent {
  @Input()
  public cat: Cat = new Cat();
}
