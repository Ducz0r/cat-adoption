import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../../../../base/pages/base-page.component';

@Component({
  selector: 'ca-shrd-err-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent extends BasePageComponent {
  public constructor() {
    super();

    this.setTitle('Not Found');
  }
}
