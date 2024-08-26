import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'select2';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Initialize Select2 with tagging enabled
    $('#type').select2({
      tags: true, // Enable tagging
      placeholder: 'Select or add a type',
      allowClear: true,
      tokenSeparators: [',', ' '],
    });
  }
}
