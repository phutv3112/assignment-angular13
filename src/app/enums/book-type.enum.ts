import { BaseTypeEnum } from './base-type.enum'

export class BookTypeEnum extends BaseTypeEnum {
  static readonly ProgrammingBook = new BookTypeEnum(
    'Programming',
    'Programming'
  );
  static readonly NovelBook = new BookTypeEnum('Novel', 'Novel');
  static readonly AnimeBook = new BookTypeEnum('Anime', 'Anime');
  static readonly EnglishBook = new BookTypeEnum('English', 'English');

  static override readonly All = [
    this.ProgrammingBook,
    this.NovelBook,
    this.AnimeBook,
    this.EnglishBook,
  ];
}
