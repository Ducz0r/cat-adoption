export class Cat {
  public id: number | null = null;
  public listedAt: Date = new Date();
  public name: string = '';
  public image: string | null = null;
  public age: number = 0;
  public breed: string = '';
  public description: string | null = null;
  public contactName: string = '';
  public contactPhone: string = '';

  public constructor(source: Partial<Cat> | undefined = undefined) {
    Object.assign(this, source);
  }
}
