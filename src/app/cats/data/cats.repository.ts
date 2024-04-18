import { Injectable, inject } from '@angular/core';
import { Cat } from '../models';
import { Observable, map, throwError } from 'rxjs';
import { CatsHttpApiService } from '../api/services';
import { BaseRepository } from '../../core/data';

@Injectable({ providedIn: 'root' })
export class CatsRepository extends BaseRepository<Cat[]> {

  private catsHttpApiService: CatsHttpApiService = inject(CatsHttpApiService);

  public findById(id: number): Observable<Cat> {
    return this.get().pipe(
      map((cats: Cat[]): Cat => {
        const cat: Cat | undefined = cats.find((cat: Cat) => cat.id === id);

        if (cat === undefined) {
          throwError(() => new Error(`Cat with id ${id} not found`));
        }

        return cat!;
      })
    );
  }

  protected override fetchData(): Observable<Cat[]> {
    return this.catsHttpApiService.getCats();
  }

  protected override valueOnError(): Cat[] {
    return [];
  }
}
