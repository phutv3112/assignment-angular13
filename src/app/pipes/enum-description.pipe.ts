import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription'
})
export class EnumDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
