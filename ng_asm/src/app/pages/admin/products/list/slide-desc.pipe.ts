import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slideDesc'
})
export class SlideDescPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 50) + ' ...';
  }
}
