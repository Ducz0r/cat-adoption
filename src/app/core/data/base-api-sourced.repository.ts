import { Observable, catchError, of, retry, tap } from 'rxjs';
import { BaseRepository } from './base.repository';

export abstract class BaseApiSourcedRepository<T> extends BaseRepository<T> {

  public override get(): Observable<T | null> {
    if (this.data !== undefined) {
      return of (this.data);
    }

    return this.fetchData()
      .pipe(
        retry(3),
        catchError(() => of(this.valueOnError())),
        tap((data: T | null) => (this.data = data))
      );
  }

  public override set(data: T | null): void {
    throw new Error('Method not supported.');
  }

  protected abstract fetchData(): Observable<T | null>;

  protected abstract valueOnError(): T | null;
}
