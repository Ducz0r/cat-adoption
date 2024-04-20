import { Component, OnInit, inject } from '@angular/core';
import { CardsViewComponent } from '../../components';
import { Cat } from '../../models';
import { CatsRepository } from '../../data';
import { Observable, concatMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from '../../../base/pages';
import { UserService } from '../../../user/services';

@Component({
  selector: 'ca-cats-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardsViewComponent
  ]
})
export class IndexPageComponent extends BasePageComponent implements OnInit {
  private catsRepository: CatsRepository = inject(CatsRepository);
  private userService: UserService = inject(UserService);

  public cats$: Observable<Cat[] | null> | undefined;

  public constructor() {
    super();

    this.setTitle('Cats', 'All Cats');
  }

  public ngOnInit(): void {
    this.cats$ = this.userService.onUserChanged()
      .pipe(
        concatMap(() => this.catsRepository.reload())
      );
  }
}
