import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Add this line

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './features/books/book-list/book-list.component';
import { CreateBookComponent } from './features/books/create-book/create-book.component';
import { UpdateBookComponent } from './features/books/update-book/update-book.component';
import { ViewBookComponent } from './features/books/view-book/view-book.component';
import { EnumDescriptionPipe } from './pipes/enum-description.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    ViewBookComponent,
    EnumDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
