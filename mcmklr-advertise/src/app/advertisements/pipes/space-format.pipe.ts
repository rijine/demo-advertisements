import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceFormat'
})
export class SpaceFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value ? Math.floor(value) : '-';
  }

}
