import { Product } from 'src/app/core/models/product.model';
import { createReducer, on } from "@ngrx/store";
import { increaseQuantity } from './product.action';

export const productInitialState: Product = new Product();
export const productReducer = createReducer(
    productInitialState,
    on(increaseQuantity, (state, {product}) => {
        console.log(product)
        return product
    })
)