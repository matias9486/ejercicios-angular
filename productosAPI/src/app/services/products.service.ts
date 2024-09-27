import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlBase:string ='https://api.escuelajs.co/api/v1/products?limit=8&offset=0';

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase);
  }
}
