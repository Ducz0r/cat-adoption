import { Injectable, inject } from '@angular/core';
import { Cat } from '../models';
import { Observable, map } from 'rxjs';
import { CatsHttpApiService } from '../api/services';
import { BaseApiSourcedRepository } from '../../core/data';

@Injectable({ providedIn: 'root' })
export class CatsRepository extends BaseApiSourcedRepository<Cat[]> {

  private catsHttpApiService: CatsHttpApiService = inject(CatsHttpApiService);

  public findById(id: number): Observable<Cat> {
    return this.get().pipe(
      map((cats: Cat[] | null): Cat => {
        const cat: Cat | undefined = cats?.find((cat: Cat) => cat.id === id);

        if (cat === undefined) {
          throw new Error(`Cat with id ${id} not found`);
        }

        return cat!;
      })
    );
  }

  protected override fetchData(): Observable<Cat[] | null> {
    return this.catsHttpApiService.getCats();
  }

  protected override valueOnError(): Cat[] | null {
    return [];
  }
}
