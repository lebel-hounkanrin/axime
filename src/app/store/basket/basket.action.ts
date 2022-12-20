import { Basket } from './basket.model';
import { createAction, props } from '@ngrx/store';
export const loadBakset = createAction("[Basket Component] Get products on basket")
export const loadBasketSuccess = createAction("[Basket Component] Get products in basket successfully]",
props<{basket: Basket}>)