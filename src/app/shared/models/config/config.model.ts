import { ApiConfig } from './api-config.model';

export class Config {
  public api: ApiConfig | undefined = undefined;

  public constructor(source: Partial<ApiConfig> | undefined = undefined) {
    Object.assign(this, source);
  }
}
