import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
import { BookDto } from 'src/app/models/books/book.dto';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  model: BookDto;
  id: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.model = {
      id: 0,
      author: '',
      name: '',
      type: '',
      locked: false,
    };
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted with model:', this.model);
    alert('Form submitted with model:');

    // Implement your form submission logic, e.g., sending the data to a server
    // this.bookService.createOrUpdateBook(this.model).subscribe(response => {
    //   // Handle response
    //   this.router.navigate(['/books']);
    // });
  }
}
