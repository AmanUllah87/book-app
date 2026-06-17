import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Review {
  reviewer: {
    name: string;
    email: string;
  };
  rating: number | null;
  title: string;
  body: string;
  recommend: boolean;
}

@Component({
  selector: 'app-book-review',
  imports: [RouterLink, FormsModule],
  templateUrl: './book-review.html',
  styleUrl: './book-review.scss',
})
export class BookReview {
  review: Review = {
    reviewer: {
      name: '',
      email: '',
    },
    rating: null,
    title: '',
    body: '',
    recommend: false,
  };

  submitted = false;
  reviewerName = '';

  submitReview(form: NgForm) {
    console.log(form.value);

    if (form.invalid) return;

    this.reviewerName = this.review.reviewer.name;
    this.submitted = true;
  }
}
