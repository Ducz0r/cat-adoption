import { ApiHostConfig } from './api-host-config.model';

export class ApiConfig {
  public cats: ApiHostConfig | undefined = undefined;

  public constructor(source: Partial<ApiConfig> | undefined = undefined) {
    Object.assign(this, source);
  }
}
