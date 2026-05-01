import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BooksService } from '../books/books.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.booksService.getAllBooks().subscribe(books => {
      this.books = books;
      this.cdr.detectChanges();
    });
  }

  get topRatedBooks(): Book[] {
    return this.books
      .filter(b => b.rating && b.rating >= 4)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }
}
