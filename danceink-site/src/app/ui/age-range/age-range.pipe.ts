import { Pipe, PipeTransform } from '@angular/core';
import { AgeRange } from '../../data/models';

@Pipe({
  name: 'ageRange',
  standalone: true
})
export class AgeRangePipe implements PipeTransform {
  transform(range: AgeRange): string {
    return range.max ? `${range.min}-${range.max}` : `${range.min}+`;
  }
}
