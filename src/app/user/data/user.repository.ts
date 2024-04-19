import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseRepository } from '../../core/data';
import { User } from '../models';

// TODO
@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<User> {

  protected override fetchData(): Observable<User> {
    return of(new User());
  }

  protected override valueOnError(): User {
    return new User();
  }
}
