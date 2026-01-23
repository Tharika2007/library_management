import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../../services/library';

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './return-book.html'
})
export class ReturnBookComponent {
  bookId!: number;

  constructor(private libraryService: LibraryService) {}

  returnBook(): void {
    this.libraryService.returnBook(this.bookId);
    alert('Book Returned Successfully');
  }
}
