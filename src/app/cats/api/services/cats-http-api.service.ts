import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { BaseHttpApiService } from '../../../base/api/services';
import { ConfigRepository } from '../../../shared/data';
import { Cat, PremiumCat } from '../../models';
import { CatsAdapter, PremiumCatsAdapter } from '../adapters';
import { CatDto, PremiumCatDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class CatsHttpApiService extends BaseHttpApiService {
  private readonly configRepository: ConfigRepository = inject(ConfigRepository);

  public constructor() {
    super();

    // Set the host value from the config
    this.configRepository.get$().subscribe({
      next: (config) => {
        this.host = config?.api?.cats?.host;
      }
    });
  }

  public getCats(): Observable<Cat[]> {
    return this.getAdapted<Cat[], CatDto[]>('cats', new CatsAdapter())
  }

  public getPremiumCats(): Observable<Cat[]> {
    return this.getAdapted<PremiumCat[], PremiumCatDto[]>('premium-cats', new PremiumCatsAdapter())
  }
}
