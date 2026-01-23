import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { BookListComponent } from './components/book-list/book-list';
import { BorrowBookComponent } from './components/borrow-book/borrow-book';
import { ReturnBookComponent } from './components/return-book/return-book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    BookListComponent,
    BorrowBookComponent,
    ReturnBookComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
