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
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
  reloadData() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
  confirmDelete(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this book?');
    if (confirmed) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.reloadData();
        },
      });
    }else{
      this.reloadData();
    }
  }
}
