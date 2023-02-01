import { HttpClient } from '@angular/common/http';
import { Product, Stock } from './../models/product.model';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
    selectedProducts: Product[] = [];
    constructor(private http: HttpClient){}
    private _url = `${environment.baseApiUrl}/stock`
    getProduct(){
        return this.http.get<Stock[]>(`${this._url}/10`)
    }
    getAllProduct(){
        return this.http.get<Stock[]>(`${this._url}/promo`)
    }
    
}