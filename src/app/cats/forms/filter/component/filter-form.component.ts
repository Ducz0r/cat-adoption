import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModel, FormValueModel } from '../models';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'ca-cats-forms-filter',
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormComponent implements OnDestroy {

  private formValueChangesSubscription: Subscription | undefined = undefined;

  @Output()
  public onFilterChange: EventEmitter<string> = new EventEmitter<string>();

  public filterForm!: FormGroup<FormGroupModel>;

  public constructor() {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.formValueChangesSubscription?.unsubscribe();
  }

  private initForm(): void {
    this.filterForm = new FormGroup<FormGroupModel>({
      filter: new FormControl<string>('', { nonNullable: true })
    });

    this.formValueChangesSubscription = this.filterForm.valueChanges
      .pipe(
        // Map filter value to string
        map((value: Partial<FormValueModel>): string => value.filter || ''),
      )
      .subscribe({
        next: (filterText: string) => {
          this.onFilterChange.emit(filterText);
        }
      });
  }
}
