import { HttpClient } from '@angular/common/http';
import { BasketStore } from './../models/basket-store.interface';
import { Product } from './../models/product.model';
import { Injectable, Optional, SkipSelf } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class BasketStoreService{
url = `${environment.baseApiUrl}/order`
private productsSubject = new BehaviorSubject<Product[]>([]);
initialState: BasketStore = {
    products$: this.productsSubject.asObservable()
}
    constructor(
        private http: HttpClient,
        @Optional() @SkipSelf() parent?: BasketStoreService){
        if(parent){
            throw Error("Trying to create mutliple instance. This service should be singleton")
        }
    }
    updateQuantity(product: Product, quantity: number){
        let existingProducts = [...this.productsSubject.value];
        product.quantity = quantity
        //const prod = {...product, quantity: quantity}
        //existingProducts = [...existingProducts.filter(p => p !== product)].concat(prod);
        product.quantity = quantity;
        this.productsSubject.next(existingProducts);
    }
    addProductToBasket(product:Product): void{
        const existingProducts = [...this.productsSubject.value];
        const prod = {...product, quantity: 1}
        if((existingProducts.filter(p => p.id === prod.id)).length !==0) {
           
        } else {
            existingProducts.push(prod);
            this.productsSubject.next(existingProducts);
        }
        // else{
        //     existingProducts.push(product);
        //     this.productsSubject.next(existingProducts);
        // }
    }
    removeProductFromBasket(product: Product){
        let existingProducts = [...this.productsSubject.value];
        existingProducts = existingProducts.filter(p => p !== product);
        this.productsSubject.next(existingProducts);
    }

    orderProduct(prod: {productId: string, product_quantity: number}[]){
        return this.http.post(this.url, {
            orderItems: prod
        })
    }
}