import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'ageToYearsOld'
})
export class AgeToYearsOldPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) {
      return `${value} year old`;
    } else {
      return `${value} years old`;
    }
  }
}
