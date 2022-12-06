import { Product } from 'src/app/core/models/product.model';
import { createReducer, on } from "@ngrx/store";
import { increaseQuantity } from './product.action';
import { initialState } from './stocks.reducer';
import { stocksFetchAPISuccess } from './stocks.action';

export const productInitialState: Product[] = [];
export const productReducer = createReducer(
    initialState,
)
// export const productReducer = createReducer(
//     productInitialState,
//     on(increaseQuantity, (state, {product}) => {
//         console.log(product)
//         return product
//     })
// )