import { BasketStore } from './../models/basket-store.interface';
import { InjectionToken, Provider } from "@angular/core";
import { BasketStoreService } from './basket-store.service';

export const BASKET_STORE = new InjectionToken<BasketStore>("BasketStore")
export const BASKET_STORE_PROVIDERS: Provider[] = [
    {provide: BasketStoreService},
    {provide: BASKET_STORE, deps: [BasketStoreService], useFactory: basketStoreFactory}
];
export function basketStoreFactory(service: BasketStoreService): BasketStore {
    return service.initialState;
    
}