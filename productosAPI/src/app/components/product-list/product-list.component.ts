import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  public productList: Product[] = [];

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (data:Product[]) => {
        this.productList = data;
        console.log(this.productList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
    
}
