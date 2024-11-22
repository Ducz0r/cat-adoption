import { Injectable, inject } from '@angular/core';
import { CatsRepository } from '../data';
import { Observable, catchError, concatMap, map, of, retry, tap } from 'rxjs';
import { UserService } from '../../user/services';
import { CatsHttpApiService } from '../api/services';
import { User } from '../../user/models';
import { Cat } from '../models';

@Injectable({ providedIn: 'root' })
export class CatsService {
  private readonly minFilterTextLength: number = 3;

  private userService: UserService = inject(UserService);
  private catsRepository: CatsRepository = inject(CatsRepository);
  private httpApiService: CatsHttpApiService = inject(CatsHttpApiService);

  public constructor() {
    this.initialize();
  }

  public count$(filter: string = ''): Observable<number> {
    return this.catsRepository.get$().pipe(
      // Filtering
      map((cats: Cat[] | null): Cat[] | null => this.filterCats(cats, filter)),
      map((cats: Cat[] | null): number => cats?.length || 0)
    );
  }

  public get$(pageSize: number = Number.MAX_SAFE_INTEGER, pageNumber: number = 1, filter: string = ''): Observable<Cat[] | null> {
    return this.catsRepository.get$().pipe(
      // Filtering
      map((cats: Cat[] | null): Cat[] | null => this.filterCats(cats, filter)),
      // Pagination
      map((cats: Cat[] | null): Cat[] | null => this.paginateCats(cats, pageSize, pageNumber))
    );
  }

  public findById$(id: number): Observable<Cat> {
    return this.get$().pipe(
      map((cats: Cat[] | null): Cat => {
        const cat: Cat | undefined = cats?.find((cat: Cat) => cat.id === id);

        if (cat === undefined) {
          throw new Error(`Cat with id ${id} not found.`);
        }

        return cat!;
      })
    );
  }

  private initialize(): void {
    // Upon any user change, load the corresponding cats from the API
    this.userService.onUserChanged$()
      .pipe(
        concatMap((user: User | null) => {
          if (user === null) {
            return this.httpApiService.getCats();
          } else {
            return this.httpApiService.getPremiumCats();
          }
        }),
        retry(3),
        catchError(() => of([])),
        tap((cats: Cat[] | null) => this.catsRepository.set(cats))
      )
      .subscribe();
  }

  private filterCats(cats: Cat[] | null, filter: string): Cat[] | null {
    if (filter.length < this.minFilterTextLength) {
      return cats;
    }

    return cats?.filter((cat: Cat) => (
      cat.name.toLowerCase().includes(filter.toLowerCase()) ||
      cat.breed.toLowerCase().includes(filter.toLowerCase()) ||
      cat.description?.toLowerCase().includes(filter.toLowerCase())
    )) || null;
  }

  private paginateCats(cats: Cat[] | null, pageSize: number, pageNumber: number): Cat[] | null {
    return cats?.slice(pageSize * (pageNumber - 1), pageSize * pageNumber) || null;
  }
}
