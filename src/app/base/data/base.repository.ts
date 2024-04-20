import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BaseRepository<T> {
  // TODO: This subject is never completed (e.g. on destroy) - since all repositories are currently
  // provided in root, this is not an issue, however, this should be fixed
  private dataChangedSource: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  protected data: T | undefined | null = undefined;

  public get(): T | null {
    if (this.data === undefined)
    {
      throw new Error('Data has not been set yet.');
    }

    return this.data;
  }

  public set(data: T | null): void {
    this.data = data;
    this.dataChangedSource.next(data);
  }

  public onDataChanged(): Observable<T | null> {
    return this.dataChangedSource.asObservable();
  }
}
