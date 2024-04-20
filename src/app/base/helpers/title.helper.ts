export class TitleHelper {
  private static readonly titlePrefix: string = 'Cat Adoption';
  private static readonly titleDelimiter: string = ' | ';

  public static genTitle(...args: string[]): string {
    return `${this.titlePrefix}${this.titleDelimiter}${args.join(this.titleDelimiter)}`;
  }
}
