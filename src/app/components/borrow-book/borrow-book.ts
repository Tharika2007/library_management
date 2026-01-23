import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../../services/library';

@Component({
  selector: 'app-borrow-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './borrow-book.html'
})
export class BorrowBookComponent {
  bookId!: number;

  constructor(private libraryService: LibraryService) {}

  borrowBook(): void {
    this.libraryService.borrowBook(this.bookId);
    alert('Book Borrowed Successfully');
  }
}
