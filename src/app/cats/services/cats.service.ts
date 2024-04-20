import { Injectable, inject } from '@angular/core';
import { CatsRepository } from '../data';
import { Observable, catchError, concatMap, map, of, retry, tap } from 'rxjs';
import { UserService } from '../../user/services';
import { CatsHttpApiService } from '../api/services';
import { User } from '../../user/models';
import { Cat } from '../models';

@Injectable({ providedIn: 'root' })
export class CatsService {
  private userService: UserService = inject(UserService);
  private catsRepository: CatsRepository = inject(CatsRepository);
  private httpApiService: CatsHttpApiService = inject(CatsHttpApiService);

  public constructor() {
    this.initialize();
  }

  public get(): Observable<Cat[] | null> {
    return this.catsRepository.get();
  }

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

  private initialize(): void {
    // Upon any user change, load the corresponding cats from the API
    this.userService.onUserChanged()
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
}
