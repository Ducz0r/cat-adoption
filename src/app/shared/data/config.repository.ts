import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../models/config';
import { BaseCachedObservableRepository } from '../../base/data';

@Injectable({ providedIn: 'root'})
export class ConfigRepository extends BaseCachedObservableRepository<Config> {
  private readonly configFileUrl: string = 'assets/config.json';

  private httpClient: HttpClient = inject(HttpClient);

  public constructor() {
    // Readonly repository
    super(true);
  }

  protected loadData(): Observable<Config> {
    return this.httpClient.get<Config>(this.configFileUrl);
  }
}
