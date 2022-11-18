import { BasketStore } from './../models/basket-store.interface';
import { Product } from './../models/product.model';
import { Injectable, Optional, SkipSelf } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BasketStoreService{
private productsSubject = new BehaviorSubject<Product[]>([]);
initialState: BasketStore = {
    products$: this.productsSubject.asObservable()
}
    constructor(@Optional() @SkipSelf() parent?: BasketStoreService){
        if(parent){
            throw Error("Trying to create mutliple instance. This service should be singleton")
        }
    }

    addProductToBasket(product:Product): void{
        const existingProducts = [...this.productsSubject.value];
        existingProducts.push(product);
        this.productsSubject.next(existingProducts);
    }
}