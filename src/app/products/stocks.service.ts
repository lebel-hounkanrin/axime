import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Stocks } from './store/stocks';

@Injectable({providedIn: "root"})
export class StocksService{
    constructor(private http: HttpClient){}
    private _url = "http://localhost:3000";
    limit = 3;
    skip=0;
    get(){
       return this.http.get<Stocks[]>(`${this._url}/stock/${this.limit}`);
    }
    getMoreProducts(skip=3){
        this.limit +=skip
        return this.http.get<Stocks[]>(`${this._url}/stock/${this.limit}`)
    }
}