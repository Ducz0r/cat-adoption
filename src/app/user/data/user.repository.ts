import { Injectable } from '@angular/core';
import { BaseRepository } from '../../base/data';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<User> {
}
