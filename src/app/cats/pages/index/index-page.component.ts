import { Component, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../../../base/pages';
import { CatsService } from '../../services';

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
  private catsService: CatsService = inject(CatsService);

  public cats$: Observable<Cat[] | null> | undefined;

  public constructor() {
    super();

    this.setTitle('Cats', 'All Cats');
  }

  public ngOnInit(): void {
    this.cats$ = this.catsService.get();
  }
}
