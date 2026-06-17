import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from '../book-list/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-edit-book',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit-book-reactive.html',
  styleUrl: './edit-book-reactive.scss',
})
export class EditBookReactive implements OnInit {

   name:string = 'Niaj Mahmud'

    
    form = new FormGroup({
        id: new FormControl(),
        name : new FormControl(),
        author: new FormControl(),
        publishedYear: new FormControl(),
        rating: new FormControl(),
        publisher: new FormGroup({
            publisherName: new FormControl(),
            publisherType: new FormControl(),
        }),
        category: new FormControl(),
        description: new FormControl(),
    })

  constructor(private route: ActivatedRoute, private bookService: BooksService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const bookId = Number(paramMap.get('id'));
      if (!bookId) return;
      this.getBook(bookId);
    });
  }

  getBook(id: number){
    this.bookService.getBook(id).subscribe( book => {
      console.log(book)
      const bookData = {
        name: book.name
      }
      this.form.patchValue(book);
      // this.book = res;
      // this.cdr.detectChanges();
    })
  }

  saveBook() {
    console.log(this.form.value)
    this.bookService.save(this.form.value).subscribe(book => {
      console.log(book)
    })

  }
}
