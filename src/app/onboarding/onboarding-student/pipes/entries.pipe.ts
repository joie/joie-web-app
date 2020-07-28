import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entries',
})
export class EntriesPipe implements PipeTransform {
  transform(value: { key: boolean }, args?: any): [string, boolean] {
    return Object.entries(value)[0];
  }
}
