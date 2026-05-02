import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book-list/book.model';
import { BooksService } from '../services/books.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.scss',
})
export class EditBook implements OnInit {
  book: Book = {
      id: 0,
      name: '',
      author: '',
      publishedYear: '',
      rating: 0,
      publisher: {
        publisherName: '',
        publisherType: ''
      },
      category: '',
      description: ''
  }
  constructor(private route: ActivatedRoute, 
    private bookService: BooksService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const bookId = Number(paramMap.get('id'));
      this.getBook(bookId);
      if (!bookId) return;
    });
  }

  getBook(id: number){
    this.bookService.getBook(id).subscribe( res => {
      this.book = res;
      this.cdr.detectChanges();
    })
  }

  saveBook(form: NgForm) {
    // console.log(form.value)
    console.log(this.book)

    this.bookService.save(form.value).pipe(delay(3000)).subscribe(res => {
      console.log(res)
      this.router.navigate(['/books'])
    })
  }

  checkH1(h1: HTMLHeadElement){
    console.log(h1)
  }
}
