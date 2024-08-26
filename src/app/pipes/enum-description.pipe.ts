import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(code: string, enumItems: any[]): string {
    const matchedItem = enumItems.find((item) => item.key === code);
    return matchedItem ? matchedItem.value : '';
  }
}
