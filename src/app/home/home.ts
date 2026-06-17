import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'book-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(){
    console.log("Constructor called")
  }
  
  ngOnInit(): void {
    console.log("ngOnInit Life call")
  }

}

