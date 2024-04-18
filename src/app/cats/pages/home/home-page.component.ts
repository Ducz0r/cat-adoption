import { Component, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { CatsRepository } from '../../data';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardsViewComponent
  ]
})
export class HomePageComponent implements OnInit {
  private catsRepository: CatsRepository = inject(CatsRepository);

  public cats$: Observable<Cat[]> | undefined;

  public ngOnInit(): void {
    this.cats$ = this.catsRepository.get();
  }
}
