import { Injectable } from '@angular/core';
import { Cat } from '../models';
import { BaseObservableRepository } from '../../base/data';

@Injectable({ providedIn: 'root' })
export class CatsRepository extends BaseObservableRepository<Cat[]> {
}
