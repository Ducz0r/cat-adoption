import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseHttpApiService } from '../../../base/api/services';
import { Cat, PremiumCat } from '../../models';
import { CatsAdapter, PremiumCatsAdapter } from '../adapters';
import { CatDto, PremiumCatDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class CatsHttpApiService extends BaseHttpApiService {

  public constructor() {
    super('<cats-host>');
  }

  public getCats(): Observable<Cat[]> {
    return this.getAdapted<Cat[], CatDto[]>('cats', new CatsAdapter())
  }

  public getPremiumCats(): Observable<Cat[]> {
    return this.getAdapted<PremiumCat[], PremiumCatDto[]>('premium-cats', new PremiumCatsAdapter())
  }
}
