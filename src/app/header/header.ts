import { Component } from '@angular/core';
import { Cart } from '../cart';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'book-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartItem: IProduct[];
  cartService: Cart;
  // cartS: Cart;
  constructor() {
    this.cartService = new Cart();
    this.cartItem = this.cartService.getCartItem();
  }
  // constructor(private cartService: Cart) {
  //   this.cartS = new Cart();
  //   this.cartItem = this.cartS.getCartItem();
  //   console.log(this.cartService.getCartItem());
  // }
}
