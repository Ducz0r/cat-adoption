export class User {
  public id: number = 0;
  public email: string = '';
  public name: string = '';
  public password: string = ''; // TODO: This is insecure

  public constructor(source: Partial<User> | undefined = undefined) {
    Object.assign(this, source);
  }
}
