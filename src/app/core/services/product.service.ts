import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    constructor(private http: HttpClient){}
    private _url = "http://127.0.0.1:3000/products"
    getProduct(){
        return this.http.get<Product[]>(this._url)
    }
    selectedProducts: Product[] = [];
    
}