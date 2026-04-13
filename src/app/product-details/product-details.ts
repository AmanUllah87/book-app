import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'book-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  @Input() product!: IProduct;
  @Output() buyClicked = new EventEmitter<IProduct>();

  addToCart(product: IProduct) {
    this.buyClicked.emit(product);
  }
}
