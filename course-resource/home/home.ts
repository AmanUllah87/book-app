import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'book-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(){
    console.log("Constructor called")
  }
  ngOnInit(): void {
    console.log("On Init call")
  }
}
