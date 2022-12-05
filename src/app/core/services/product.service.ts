import { HttpClient } from '@angular/common/http';
import { Product, Stock } from './../models/product.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    constructor(private http: HttpClient){}
    private _url = "http://127.0.0.1:3000/stock"
    getProduct(){
        return this.http.get<Stock[]>(this._url)
    }
    selectedProducts: Product[] = [];
    
}