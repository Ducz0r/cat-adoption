import { Component, Input } from '@angular/core';
import { Cat, PremiumCat } from '../../models';
import { RouterModule } from '@angular/router';
import { AgeToYearsOldPipe } from '../../pipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-cats-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AgeToYearsOldPipe
  ]
})
export class CardComponent {
  @Input()
  public cat: Cat = new Cat();

  public get showPremium(): boolean {
    return this.cat instanceof PremiumCat;
  }
}
