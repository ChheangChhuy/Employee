import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  product: Product[] = [];
  totalOfProduct: number[] = [];
  public sum:number = 0;
  public totals:number = 0;

  headers = ['ID','Product Name', 'Costs', 'Actions']
  headerOfProduct = ['Product Name','Costs','Actions',]
  constructor(
    private productService : ProductService,
    ) {}

  ngOnInit(): void {
    this.getProduct();
    this.total(this.totalOfProduct);
  }

  getProduct(){
    this.productService.getProduct().subscribe(res =>{
      this.products = res;
    })
  }

  buy(id: number){
    this.productService.getProductById(id).subscribe(res =>{
      this.product.push(res);
      this.totalOfProduct.push(Number(res.costs))
      this.total(this.totalOfProduct);
      return this.sum=0;
    })
  }

  removeItem(ind: number){
    this.product.splice(ind,1)
    this.totalOfProduct.splice(ind,1)
    this.total(this.totalOfProduct);
    return this.sum=0;
  }

  total(cost : number[]){
    for(let i=0; i<cost.length; i++){
      this.sum += cost[i];
    }
    this.totals = Number(this.sum.toFixed(2));
    // console.log(cost)
    // console.log(this.sum);
  }
}
