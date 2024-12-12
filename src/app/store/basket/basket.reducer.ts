import { createReducer } from '@ngrx/store';
import { Basket } from './basket.model';

export const basketInitialState: Basket= {
    items: []
}

export const basketReducer = createReducer(
    basketInitialState
)