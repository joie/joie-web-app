import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiePrefix',
})
export class JoiePrefixPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `<span class="text-color-primary">${value.substring(4)}</span>${value}`;
  }
}
// TODO fix text-primary to auto generate colors
