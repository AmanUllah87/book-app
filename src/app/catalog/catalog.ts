import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../cart';

@Component({
  selector: 'book-catalog',
  imports: [CurrencyPipe, NgClass, NgStyle, ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit, OnDestroy {
  ngOnDestroy(): void {}
  products!: IProduct[];
  isDisabled: boolean = false;
  textColor = 'green';
  // cartService!: Cart;

  productFilter: string = '';

  cartItem: IProduct[];

  cartService: Cart;

  constructor() {
    this.cartService = new Cart();
    this.cartItem = this.cartService.getCartItem();
  }

  ngOnInit(): void {
    this.products = this.cartService.products;
    this.getFilteredProducts();
  }

  getFilteredProducts(): IProduct[] {
    return this.productFilter === ''
      ? this.products
      : this.products.filter((item) => item.category == this.productFilter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
