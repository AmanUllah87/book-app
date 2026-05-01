import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){

  }

  // getProducts(){
  //   return fetch('http://localhost:3000/api/books')
  // }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`/api/books`)
  }

  carts: IProduct[] = [];

  add(product: IProduct) {
    this.carts.push(product);
    console.log(this.carts);
  }

  getCartItem(): IProduct[] {
    return this.carts;
  }
}
