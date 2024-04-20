import { BehaviorSubject, Observable } from 'rxjs';

export abstract class BaseObservableRepository<T> {

  protected dataSource: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  public get(): Observable<T | null> {
    return this.dataSource.asObservable();
  }

  public set(data: T | null): void {
    this.dataSource.next(data);
  }
}
