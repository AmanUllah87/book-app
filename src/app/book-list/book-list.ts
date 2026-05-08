import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Book } from './book.model';
import { BooksService } from '../services/books.service';
import { delay } from 'rxjs';
import { Highlight } from '../directive/highlight';
import { Show } from '../directive/show';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, DatePipe, NgTemplateOutlet, NgIf,Highlight, Show ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {
  books: Book[] = [];

  

  constructor(private booksService: BooksService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.booksService.getAllBooks().pipe(delay(5000)).subscribe(books => {
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
