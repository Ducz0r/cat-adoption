import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseAdapter } from '../adapters';

export abstract class BaseHttpApiService {
  protected readonly httpClient: HttpClient = inject(HttpClient);

  protected host: string | undefined;

  public constructor(host: string | undefined = undefined) {
    this.host = host;
  }

  protected get<ApiModel>(route: string): Observable<ApiModel> {
    this.checkIfHostDefined();

    return this.httpClient.get<ApiModel>(`${this.host}/${route}`);
  }

  protected getAdapted<Model, ApiModel>(url: string, adapter: BaseAdapter<Model, ApiModel>): Observable<Model> {
    this.checkIfHostDefined();

    return this.get<ApiModel>(url)
      .pipe(
        map((apiModel: ApiModel): Model => adapter.toModel(apiModel))
      );
  }

  private checkIfHostDefined(): void {
    if (this.host === undefined)
    {
      throw new Error('Host is not defined.');
    }
  }
}
