import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit, OnDestroy {
  ngOnDestroy(): void {}
  products: IProduct[] = [];
  isDisabled: boolean = false;
  textColor = 'green';
  // cartService!: Cart;

  productFilter: string = '';

  cartItem: IProduct[];


  constructor(private cdr: ChangeDetectorRef, private cartService: Cart
    , private activatedRoute: ActivatedRoute
  ) {
    // this.cartService = new Cart();
    this.cartItem = this.cartService.getCartItem();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      this.productFilter = paramMap.get('filter') ?? '';
    })
    this.getProducts();
   
  }

  getProducts(){
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
       this.getFilteredProducts();
      this.cdr.detectChanges();
    })
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
