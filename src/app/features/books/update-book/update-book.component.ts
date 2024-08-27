import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from '../services/book.service';
import { BookRequestDto } from 'src/app/models/books/book-request.dto';
import { BookTypeEnum } from 'src/app/enums/book-type.enum';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  model: BookRequestDto;
  id!: number;
  BookTypeEnum!: typeof BookTypeEnum;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.model = {
      author: '',
      name: '',
      type: '',
      locked: false,
    };
     this.BookTypeEnum = BookTypeEnum;
  }

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe({
        next: (book) => {
          this.model = book;
          this.id = bookId;
        },
      });
    }
  }

  onSubmit(): void {
    this.bookService.updateBook(this.id, this.model).subscribe({
      next: (res) => {
        this.router.navigate(['/books']);
      },
    });
  }
}
