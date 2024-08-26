import { Injectable } from '@angular/core';
import { BookDto } from 'src/app/models/books/book.dto';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: BookDto[] = [
    { id: 1, name: 'English', type: 'English', author: 'PhuTV', locked: true },
    { id: 2, name: 'DSA', type: 'DSA', author: 'AnhNT3', locked: false },
    { id: 3, name: 'SQL', type: 'SQL', author: 'HoangPD14', locked: true },
  ];

  constructor() {}

  getBooks(): BookDto[] {
    return this.books;
  }

  getBookById(id: number): BookDto | undefined {
    return this.books.find((book) => book.id === id);
  }
}
