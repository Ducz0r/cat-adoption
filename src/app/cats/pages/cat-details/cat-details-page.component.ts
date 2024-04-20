import { Observable, catchError, of, tap } from 'rxjs';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Cat, PremiumCat } from '../../models';
import { CatsRepository } from '../../data';
import { AgeToYearsOldPipe } from '../../pipes';
import { BasePageComponent } from '../../../base/pages';

@Component({
  selector: 'ca-cats-cat-details-page',
  templateUrl: './cat-details-page.component.html',
  styleUrl: './cat-details-page.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AgeToYearsOldPipe
  ]
})
export class CatDetailsPageComponent extends BasePageComponent {
  private router: Router = inject(Router);
  private catsRepository: CatsRepository = inject(CatsRepository);

  public cat$: Observable<Cat> | undefined;

  @Input()
  set id(id: string) {
    this.cat$ = this.catsRepository.findById(parseInt(id, 10))
      .pipe(
        catchError(() => {
          this.router.navigate(['/not-found']);

          // Just to satisfy observable chain
          return of(new Cat());
        }),
        tap((cat: Cat) => this.setTitle('Cats', cat.name))
      );
  }

  public isPremiumCat(cat: Cat): cat is PremiumCat {
    return cat instanceof PremiumCat;
  }
}
