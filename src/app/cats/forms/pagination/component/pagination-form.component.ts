import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface PageItem {
  pageNumber: number;
  isActive: boolean;
}

@Component({
  selector: 'ca-cats-forms-pagination',
  templateUrl: './pagination-form.component.html',
  styleUrl: './pagination-form.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationFormComponent implements OnInit, OnChanges, OnDestroy {

  private paginationDataSource: BehaviorSubject<PageItem[]> = new BehaviorSubject<PageItem[]>([]);

  @Input()
  public pageSize: number = 10;

  @Input()
  public pageNumber: number = 1;

  @Input()
  public totalItems: number = 1;

  @Output()
  public onPageChange: EventEmitter<number> = new EventEmitter<number>();

  public get paginationData$(): Observable<PageItem[]> {
    return this.paginationDataSource.asObservable();
  }

  public ngOnInit(): void {
    this.generatePaginationData();
  }

  public ngOnChanges(): void {
    this.generatePaginationData();
  }

  public ngOnDestroy(): void {
    this.paginationDataSource.complete();
  }

  public toPage(event: Event, pageNumber: number): void {
    event.preventDefault();
    this.onPageChange.emit(pageNumber);
  }

  private get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  private generatePaginationData(): void {
    this.paginationDataSource.next(Array.from({ length: this.totalPages }, (_, index) => {
      const idx: number = index + 1;
      return { pageNumber: idx, isActive: idx === this.pageNumber };
    }));
  }
}
