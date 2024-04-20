import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { BehaviorSubject, Observable, combineLatest, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../../../base/pages';
import { CatsService } from '../../services';
import { FilterFormComponent } from '../../forms/filter';
import { PaginationFormComponent } from '../../forms/pagination';

@Component({
  selector: 'ca-cats-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
  PaginationFormComponent,
    FilterFormComponent,
    CardsViewComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPageComponent extends BasePageComponent implements OnInit, OnDestroy {
  public readonly pageSize: number = 15;

  private catsService: CatsService = inject(CatsService);

  private pageChangedSource: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private filterChangedSource: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public totalItems$: Observable<number> | undefined;
  public pageNumber$: Observable<number> | undefined;
  public cats$: Observable<Cat[] | null> | undefined;

  public constructor() {
    super();

    this.setTitle('Cats', 'All Cats');
  }

  public ngOnInit(): void {
    this.totalItems$ = this.filterChangedSource.asObservable()
      .pipe(
        tap((): void => this.onPageChanged(1)),
        switchMap((filterText: string): Observable<number> => this.catsService.count$(filterText))
      );
    this.pageNumber$ = this.pageChangedSource.asObservable();
    this.cats$ = combineLatest([
      this.pageChangedSource.asObservable(),
      this.filterChangedSource.asObservable()
    ]).pipe(
      switchMap((val: [pageNumber: number, filterText: string]): Observable<Cat[] | null> =>
        this.catsService.get$(this.pageSize, val[0], val[1])),
    );
  }

  public ngOnDestroy(): void {
    this.filterChangedSource.complete();
  }

  public onPageChanged(pageNumber: number): void {
    this.pageChangedSource.next(pageNumber);
  }

  public onFilterChanged(filterText: string): void {
    this.filterChangedSource.next(filterText);
  }
}
