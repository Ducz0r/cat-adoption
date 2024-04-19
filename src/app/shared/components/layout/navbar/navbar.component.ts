import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ca-shrd-layt-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class NavbarComponent {

}
