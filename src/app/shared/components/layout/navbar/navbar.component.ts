import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../user/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-shrd-layt-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    UserService
  ]
})
export class NavbarComponent {
  private userService: UserService = inject(UserService);

  public get showUserProfile(): boolean {
    return this.userService.isUserSignedIn();
  }

  public get showSignIn(): boolean {
    return !this.userService.isUserSignedIn();
  }

  public get userName(): string {
    return this.userService.getCurrentUser()?.name || '';
  }

  public signOut(event: Event): void {
    event.preventDefault();

    this.userService.signOut();
  }
}
