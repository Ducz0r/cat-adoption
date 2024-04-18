export class Cat {
  public id: number | null = null;
  public listed_at: Date = new Date();
  public name: string = '';
  public image: string | null = null;
  public age: number = 0;
  public breed: string = '';
  public description: string | null = null;
  public contact_name: string = '';
  public contact_phone: string = '';

  public constructor(source: Partial<Cat> | undefined = undefined) {
    Object.assign(this, source);
  }
}
