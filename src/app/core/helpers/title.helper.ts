export class TitleHelper {
  private static readonly titlePrefix: string = 'Cats Adoption';
  private static readonly titleDelimiter: string = ' | ';

  public static genTitle(...args: string[]): string {
    return `${this.titlePrefix}${this.titleDelimiter}${args.join(this.titleDelimiter)}`;
  }
}
