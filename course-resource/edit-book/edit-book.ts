import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  imports: [RouterLink],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.scss',
})
export class EditBook implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const bookId = paramMap.get('id');
      if (!bookId) return;
    });
  }

  saveBook() {}
}
