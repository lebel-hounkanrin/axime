import { createFeatureSelector } from '@ngrx/store';
import { Basket } from './basket.model';
export const productsInBasket = createFeatureSelector<Basket>("basketProducts")