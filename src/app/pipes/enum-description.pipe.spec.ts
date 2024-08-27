import { BaseTypeEnum } from '../enums/base-type.enum';
import { EnumDescriptionPipe } from './enum-description.pipe';

describe('EnumDescriptionPipe', () => {
  let pipe: EnumDescriptionPipe
  beforeEach(() => {
    pipe = new EnumDescriptionPipe();
  });
  it('create an instance', () => {
    const pipe = new EnumDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform enum code to name', () => {
    const mockEnum: BaseTypeEnum[] = [
      { code: '1', name: 'Type 1' },
      { code: '2', name: 'Type 2' },
    ];
    expect(pipe.transform('1', mockEnum)).toBe('Type 1');
    expect(pipe.transform('3', mockEnum)).toBe('');
  });
});
