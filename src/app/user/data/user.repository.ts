import { Injectable } from '@angular/core';
import { BaseRepository } from '../../core/data';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<User> {
}
