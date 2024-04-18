import { Component, Input } from '@angular/core';
import { CardComponent } from '..';
import { Cat } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-cats-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrl: './cards-view.component.scss',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ]
})
export class CardsViewComponent {
  @Input()
  public cats: Cat[] = [];
}
