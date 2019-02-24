import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(val => args.indexOf(val.name) === -1 );
  }

}
