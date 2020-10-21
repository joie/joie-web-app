import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiePrefix',
})
export class JoiePrefixPipe implements PipeTransform {
  transform(value: unknown, highlight: boolean): string {
    console.log(highlight);
    const pillar = highlight ? `<span class="text-color-primary">${value}</span>` : value;
    return `Joie${pillar}`;
  }
}
