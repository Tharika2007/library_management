import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../../services/library';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html'
})
export class BookListComponent {
  books: Book[];

  constructor(private libraryService: LibraryService) {
    this.books = this.libraryService.getBooks();
  }
}

