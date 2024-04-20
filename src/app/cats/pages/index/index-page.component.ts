import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../../../base/pages';
import { CatsService } from '../../services';
import { FilterFormComponent } from '../../forms/filter';

@Component({
  selector: 'ca-cats-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FilterFormComponent,
    CardsViewComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPageComponent extends BasePageComponent implements OnInit, OnDestroy {
  private catsService: CatsService = inject(CatsService);

  private filterChangedSource: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public cats$: Observable<Cat[] | null> | undefined;

  public constructor() {
    super();

    this.setTitle('Cats', 'All Cats');
  }

  public ngOnInit(): void {
    this.cats$ = this.filterChangedSource.asObservable()
      .pipe(
        switchMap((filterText: string): Observable<Cat[] | null> => this.catsService.getFiltered$(filterText)),
      );
  }

  public ngOnDestroy(): void {
    this.filterChangedSource.complete();
  }

  public onFilterChanged(filterText: string): void {
    this.filterChangedSource.next(filterText);
  }
}
