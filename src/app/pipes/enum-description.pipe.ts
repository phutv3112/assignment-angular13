import { Pipe, PipeTransform } from '@angular/core';
import { BaseTypeEnum } from '../enums/base-type.enum';

@Pipe({
  name: 'enumDescription',
})
export class EnumDescriptionPipe implements PipeTransform {
  transform(code: string | null, enumItems: BaseTypeEnum[]): string | null {
    if (!code || !enumItems || enumItems.length === 0) {
      return null;
    }
    const item = enumItems.find((e) => e.code === code);
    return item ? item.name : null;
  }
}
