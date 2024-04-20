import { Component, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { CatsRepository } from '../../data';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../../../shared/pages';

@Component({
  selector: 'ca-cats-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardsViewComponent
  ]
})
export class IndexPageComponent extends BasePageComponent implements OnInit {
  private catsRepository: CatsRepository = inject(CatsRepository);

  public cats$: Observable<Cat[] | null> | undefined;

  public constructor() {
    super();

    this.setTitle('Cats', 'All Cats');
  }

  public ngOnInit(): void {
    this.cats$ = this.catsRepository.get();
  }
}
