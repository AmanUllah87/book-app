import { Component } from '@angular/core';
import { Cart } from '../cart';
import { IProduct } from '../catalog/product.model';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'book-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartItem: IProduct[];

  // cartS: Cart;
  constructor(private cartService: Cart) {
    this.cartItem = this.cartService.getCartItem();
  }
  // constructor(private cartService: Cart) {
  //   this.cartS = new Cart();
  //   this.cartItem = this.cartS.getCartItem();
  //   console.log(this.cartService.getCartItem());
  // }
}
