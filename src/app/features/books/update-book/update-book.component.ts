import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDto } from 'src/app/models/books/book.dto';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  model: BookDto;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.model = {
      id: 0,
      author: '',
      name: '',
      type: '',
      locked: false,
    };
  }

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (bookId) {
      var bookFound = this.bookService.getBookById(bookId);
      if (bookFound) {
        this.model = bookFound;
      }
    }
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted with model:', this.model);
    alert('Update book');
    // Implement your form submission logic, e.g., sending the data to a server
    // this.bookService.createOrUpdateBook(this.model).subscribe(response => {
    //   // Handle response
    //   this.router.navigate(['/books']);
    // });
  }
}
