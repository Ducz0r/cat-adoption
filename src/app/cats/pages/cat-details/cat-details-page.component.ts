import { Observable, catchError, of } from 'rxjs';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Cat } from '../../models';
import { CatsRepository } from '../../data';

@Component({
  selector: 'ca-cats-cat-details-page',
  templateUrl: './cat-details-page.component.html',
  styleUrl: './cat-details-page.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class CatDetailsPageComponent {
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
        })
      );
  }
}
