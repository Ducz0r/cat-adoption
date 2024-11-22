import { Observable, tap } from 'rxjs';
import { BaseObservableRepository } from './base-observable.repository';

export abstract class BaseCachedObservableRepository<T> extends BaseObservableRepository<T> {
  private readonly: boolean = false;
  private loaded: boolean = false;

  public constructor(readonly: boolean = false) {
    super();
    this.readonly = readonly;
  }

  public override get$(): Observable<T | null> {
    if (this.loaded) {
      return super.get$();
    }
    else {
      return this.loadData()
        .pipe(
          tap((data: T) => {
            super.set(data);
            this.loaded = true;
          })
        );
    }
  }

  public override set(data: T | null): void {
    if (this.readonly) {
      throw new Error('Method not implemented.');
    }
    else {
      super.set(data);
    }
  }

  protected abstract loadData(): Observable<T>;
}
