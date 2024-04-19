import { Component } from '@angular/core';
import { BasePageComponent } from '../../base-page.component';

@Component({
  selector: 'ca-shrd-err-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  standalone: true
})
export class NotFoundPageComponent extends BasePageComponent {
  public constructor() {
    super();

    this.setTitle('Not Found');
  }
}
