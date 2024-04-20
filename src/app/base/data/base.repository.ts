export abstract class BaseRepository<T> {

  protected data: T | undefined | null = undefined;

  public get(): T | null {
    if (this.data === undefined)
    {
      throw new Error('Data has not been set yet.');
    }

    return this.data;
  }

  public set(data: T | null): void {
    this.data = data;
  }
}
