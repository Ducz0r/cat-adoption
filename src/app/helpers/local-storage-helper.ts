export class LocalStorageHelper {

  public static itemExists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  public static getItem<T>(key: string): T | null {
    const value: string | null = localStorage.getItem(key);

    return value === null ? null : JSON.parse(value) as T;
  }

  public static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public static clear(): void {
    localStorage.clear();
  }
}
