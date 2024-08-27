import { Component, OnInit } from '@angular/core';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
  reloadData(){
    this.books = this.bookService.getBooks();
  }
}
