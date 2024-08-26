import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
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
