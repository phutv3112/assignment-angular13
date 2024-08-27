import { EnumDescriptionPipe } from './enum-description.pipe';
import { BaseTypeEnum } from '../enums/base-type.enum';

describe('EnumDescriptionPipe', () => {
  let pipe: EnumDescriptionPipe;

  beforeEach(() => {
    pipe = new EnumDescriptionPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return name if item is found', () => {
    const mockEnum: BaseTypeEnum[] = [
      { code: '1', name: 'Type 1' },
      { code: '2', name: 'Type 2' },
    ];
    expect(pipe.transform('1', mockEnum)).toBe('Type 1');
  });

  it('should return null if code is provided but item is not found', () => {
    const mockEnum: BaseTypeEnum[] = [
      { code: '1', name: 'Type 1' },
      { code: '2', name: 'Type 2' },
    ];
    expect(pipe.transform('3', mockEnum)).toBeNull();
  });

  it('should return null if code is empty', () => {
    const mockEnum: BaseTypeEnum[] = [
      { code: '1', name: 'Type 1' },
      { code: '2', name: 'Type 2' },
    ];
    expect(pipe.transform('', mockEnum)).toBeNull();
  });

  it('should return null if code is null', () => {
    const mockEnum: BaseTypeEnum[] = [
      { code: '1', name: 'Type 1' },
      { code: '2', name: 'Type 2' },
    ];
    expect(pipe.transform(null, mockEnum)).toBeNull();
  });

  it('should return null if code is provided but enumItems list is empty', () => {
    const mockEnum: BaseTypeEnum[] = [];
    expect(pipe.transform('1', mockEnum)).toBeNull();
  });
});
