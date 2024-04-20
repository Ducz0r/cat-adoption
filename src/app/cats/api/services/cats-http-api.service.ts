import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseHttpApiService } from '../../../base/api/services';
import { Cat } from '../../models';
import { CatsAdapter } from '../adapters';
import { CatDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class CatsHttpApiService extends BaseHttpApiService {

  public constructor() {
    super('<cats-host>');
  }

  public getCats(): Observable<Cat[]> {
    return this.getAdapted<Cat[], CatDto[]>('cats', new CatsAdapter())
  }
}
