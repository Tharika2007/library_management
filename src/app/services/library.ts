import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, cover: '/images/great_gatsby.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true, cover: '/images/Kill_a_Mockingbird.jpg' },
    { id: 3, title: '1984', author: 'George Orwell', available: false, cover: '/images/1984.jpg' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', available: true, cover: '/images/Pride_and_Prejudice.jpg' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', available: false, cover: '/images/The_Catcher_in_the_Rye.jpg' }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  borrowBook(id: number): void {
    const book = this.books.find(b => b.id === id);
    if (book) {
      book.available = false;
    }
  }

  returnBook(id: number): void {
    const book = this.books.find(b => b.id === id);
    if (book) {
      book.available = true;
    }
  }
}
