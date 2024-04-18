import { Injectable, inject } from '@angular/core';
import { Cat } from '../models';
import { Observable } from 'rxjs';
import { CatsHttpApiService } from '../api/services';
import { BaseRepository } from '../../core/data';

@Injectable({ providedIn: 'root' })
export class CatsRepository extends BaseRepository<Cat[]> {

  private catsHttpApiService: CatsHttpApiService = inject(CatsHttpApiService);

  protected override fetchData(): Observable<Cat[]> {
    return this.catsHttpApiService.getCats();
  }

  protected override valueOnError(): Cat[] {
    return [];
  }
}
