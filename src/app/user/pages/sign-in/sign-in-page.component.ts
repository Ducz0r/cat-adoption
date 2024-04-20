import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../../../base/pages';
import { SignInFormComponent } from '../../forms/sign-in';

@Component({
  selector: 'ca-user-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
  standalone: true,
  imports: [
    SignInFormComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPageComponent extends BasePageComponent {
  public constructor() {
    super();

    this.setTitle('Sign In');
  }
}
