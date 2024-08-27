import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from '../services/book.service';
import { BookRequestDto } from 'src/app/models/books/book-request.dto';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  model: BookRequestDto;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookService: BookService
  ) {
    this.model = {
      author: '',
      name: '',
      type: '',
      locked: false,
    };
  }

  ngOnInit(): void {

  }
  onSubmit(): void {
    this.bookService.createBook(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/books']);
      }
    })
  }
}
