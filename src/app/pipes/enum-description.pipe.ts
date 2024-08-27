import { Pipe, PipeTransform } from '@angular/core';
import { BaseTypeEnum } from '../enums/base-type.enum';
@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(code: string, enumItems: BaseTypeEnum[]): string {
    const matchedItem = enumItems.find((item) => item.code === code);
    return matchedItem ? matchedItem.name : '';
  }
}
