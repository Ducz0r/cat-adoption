import { Component } from '@angular/core';
import { BasePageComponent } from '../../../shared/pages';

@Component({
  selector: 'ca-user-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
  standalone: true
})
export class SignInPageComponent extends BasePageComponent {
  public constructor() {
    super();

    this.setTitle('Sign In');
  }
}
