import { HttpClient } from '@angular/common/http';
import { Product, Stock } from './../models/product.model';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
    selectedProducts: Product[] = [];
    constructor(private http: HttpClient){}
    private _url = `${environment.baseApiUrl}/products`
    getProduct(){
        return this.http.get<Product[]>(`${this._url}/pagination?take=10`)
    }
    getAllProduct(){
        return this.http.get<Product[]>(`${this._url}/promo`)
    }

    getRecommandationProduct(nb:number){
        return this.http.get<Product[]>(`${this._url}/pagination?take=${nb}`)
    }   

    getRandom(nb:number){
        return this.http.get<Product[]>(`${this._url}/pagination?take=${nb}`)
    }
}