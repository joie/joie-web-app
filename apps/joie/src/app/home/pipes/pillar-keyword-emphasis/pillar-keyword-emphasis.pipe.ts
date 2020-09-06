import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pillarKeywordEmphasis',
})
export class PillarKeywordEmphasisPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `${value.substring(0, 4)}<span class="text-color-primary">${value.substring(4)}</span>`;
  }
}
// TODO fix text-primary to auto generate colors
