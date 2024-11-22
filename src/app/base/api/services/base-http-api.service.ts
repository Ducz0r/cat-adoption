import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseAdapter } from '../adapters';

export abstract class BaseHttpApiService {
  protected httpClient: HttpClient = inject(HttpClient);
  protected host: string;

  public constructor(host: string) {
    this.host = host;
  }

  protected get<ApiModel>(route: string): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(`${this.host}/${route}`);
  }

  protected getAdapted<Model, ApiModel>(url: string, adapter: BaseAdapter<Model, ApiModel>): Observable<Model> {
    return this.get<ApiModel>(url)
      .pipe(
        map((apiModel: ApiModel): Model => adapter.toModel(apiModel))
      );
  }
}
