
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookTypeEnum } from 'src/app/enums/book-type.enum';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];
  paginatedBooks: BookDto[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  totalPages: number[] = [];
  BookTypeEnum!: typeof BookTypeEnum;

  constructor(private bookService: BookService) {
     this.BookTypeEnum = BookTypeEnum;
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.updatePaginatedBooks();
    });
  }

  updatePaginatedBooks(): void {
    this.totalPages = this.getTotalPages(); // Calculate total pages
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedBooks = this.books.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedBooks();
    }
  }

  getTotalPages(): number[] {
    return Array(Math.ceil(this.books.length / this.itemsPerPage))
      .fill(0)
      .map((x, i) => i);
  }

  onItemsPerPageChange(): void {
    this.currentPage = 0; // Reset to first page when itemsPerPage changes
    this.updatePaginatedBooks();
  }

  reloadData(): void {
    this.loadBooks();
  }

  confirmDelete(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this book?');
    if (confirmed) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.reloadData();
        },
      });
    } else {
      this.reloadData();
    }
  }
}
