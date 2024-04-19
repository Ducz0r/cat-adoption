export class User {
  public id: number = 0;
  public email: string = '';
  public name: string = '';

  public constructor(source: Partial<User> | undefined = undefined) {
    Object.assign(this, source);
  }
}
