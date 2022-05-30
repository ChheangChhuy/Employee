import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  url1 = 'http://localhost:3000/product';
  url2 = 'http://localhost:3000/product/';

  getProduct(){
    return this.http.jsonp<Product[]>(this.url1,'callback');
  }
  getProductById(id: number){
    return this.http.jsonp<Product>(`${this.url2 + id}`,'callback')
  }
}
