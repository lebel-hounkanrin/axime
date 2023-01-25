import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class PaymentService {
    constructor(private http: HttpClient){}
    private _url = `${environment.baseApiUrl}`
    createPayment(total: number, orderId: string){
        console.log(`${this._url}/order-pay`)
        return this.http.post(`${this._url}/order-pay`, {total: total, order_id: orderId})
    }
    
}