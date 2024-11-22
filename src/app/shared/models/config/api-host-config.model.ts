export class ApiHostConfig {
  public host: string = '';

  public constructor(source: Partial<ApiHostConfig> | undefined = undefined) {
    Object.assign(this, source);
  }
}
