import { Observable, catchError, of, retry, tap } from 'rxjs';

export abstract class BaseRepository<T> {

  private data: T | undefined = undefined;

  constructor() {}

  public get(): Observable<T> {
    if (this.data !== undefined) {
      return of (this.data);
    }

    return this.fetchData()
      .pipe(
        retry(3),
        catchError(() => of (this.valueOnError())),
        tap((data: T) => (this.data = data))
      );
  }

  protected abstract fetchData(): Observable<T>;

  protected abstract valueOnError(): T;
}
