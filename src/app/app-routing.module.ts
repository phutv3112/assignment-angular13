import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './features/books/create-book/create-book.component';
import { UpdateBookComponent } from './features/books/update-book/update-book.component';
import { ViewBookComponent } from './features/books/view-book/view-book.component';
import { BookListComponent } from './features/books/book-list/book-list.component';

const routes: Routes = [
  { path: 'books/create', component: CreateBookComponent },
  { path: 'books/update/:id', component: UpdateBookComponent },
  { path: 'books/view/:id', component: ViewBookComponent },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
