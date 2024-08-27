import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  book!: BookDto;
  constructor(private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (bookId){
      if (bookId) {
        this.bookService.getBookById(bookId).subscribe({
          next: (res) => {
            this.book = res;
          },
        });
      }
    }
  }
}
