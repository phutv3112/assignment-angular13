import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRequestDto } from 'src/app/models/books/book-request.dto';
import { BookDto } from 'src/app/models/books/book.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: BookDto[] = [
    { id: 1, name: 'English', type: 'English', author: 'PhuTV', locked: true },
    { id: 2, name: 'Franch', type: 'Franch', author: 'AnhNT3', locked: false },
    { id: 3, name: 'SQL', type: 'SQL', author: 'HoangPD14', locked: true },
  ];

  private apiUrl = `${environment.apiBase}/api/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<BookDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BookDto>(url);
  }

  createBook(book: BookRequestDto): Observable<BookDto> {
    return this.http.post<BookDto>(this.apiUrl, book, this.getHttpOptions());
  }

  updateBook(id: number, book: BookRequestDto): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, book, this.getHttpOptions());
  }

  deleteBook(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.getHttpOptions());
  }
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
