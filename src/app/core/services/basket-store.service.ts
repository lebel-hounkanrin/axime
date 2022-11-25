import { HttpClient } from '@angular/common/http';
import { BasketStore } from './../models/basket-store.interface';
import { Product } from './../models/product.model';
import { Injectable, Optional, SkipSelf } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BasketStoreService{
url = "http://127.0.0.1:3000/product-ordered"
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

    addProductToBasket(product:Product): void{
        const existingProducts = [...this.productsSubject.value];
        if(existingProducts.includes(product)) {product.quantity +=1 }
        else{
            existingProducts.push(product);
            this.productsSubject.next(existingProducts);
        }
    }
    removeProductFromBasket(product: Product){
        let existingProducts = [...this.productsSubject.value];
        existingProducts = existingProducts.filter(p => p !== product);
        this.productsSubject.next(existingProducts);
    }

    orderProduct(products: Product[]){
        return this.http.post(this.url, products)
    }
}