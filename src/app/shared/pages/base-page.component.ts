import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleHelper } from '../../core/helpers';

export abstract class BasePageComponent {
  protected titleService: Title = inject(Title);

  protected setTitle(...args: string[]): void {
    this.titleService.setTitle(TitleHelper.genTitle(...args));
  }
}
