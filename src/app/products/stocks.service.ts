import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Stocks } from './store/stocks';

@Injectable({providedIn: "root"})
export class StocksService{
    constructor(private http: HttpClient){}
    private _url = "http://localhost:3000"
    get(){
       return this.http.get<Stocks[]>(`${this._url}/stock`)
    }
}