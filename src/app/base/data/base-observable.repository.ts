import { Observable, of } from 'rxjs';

export abstract class BaseObservableRepository<T> {

  protected data: T | undefined | null = undefined;

  public get(): Observable<T | null> {
    if (this.data === undefined)
    {
      throw new Error('Data has not been set yet.');
    }

    return of(this.data);
  }

  public set(data: T | null): void {
    this.data = data;
  }
}
