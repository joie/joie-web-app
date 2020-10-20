import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiePrefix',
})
export class JoiePrefixPipe implements PipeTransform {
  transform(value: unknown): string {
    return `Joie<span class="text-color-primary">${value}</span>`;
  }
}
