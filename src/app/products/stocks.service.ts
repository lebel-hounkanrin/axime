import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Product } from '../core/models/product.model';

@Injectable({providedIn: "root"})
export class StocksService{
    constructor(private http: HttpClient){}
    private _url = `${environment.baseApiUrl}`;
    take = 10;
    skip=0;
    get(){
       return this.http.get<Product[]>(`${this._url}/products/pagination?take=${this.take}`);
    }
    getMoreProducts(){
        this.skip=this.take+this.skip
        return this.http.get<Product[]>(`${this._url}/products/pagination?skip=${this.skip}&take=${this.take}`)
    }

    getProductsInStockByCategory(category_name?: string){
        return this.http.get<Product[]>(`${this._url}/stock/?category=${category_name}`)
    }

    getProductsByTag(tag_name: string){
        return this.http.get<Product[]>(`${this._url}/products/search?productName=${tag_name}`)
    }
    getRandom(){
        return this.http.get<Product[]>(`${this._url}/stock/4`);
    }
}