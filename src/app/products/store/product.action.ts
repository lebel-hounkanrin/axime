import { Product } from 'src/app/core/models/product.model';
import { createAction, props } from "@ngrx/store";

export const invokeIncreaseQuantity = createAction(
    "[Product] increase product quantity"
)
export const increaseQuantity = createAction(
    "[Product] increase product quantity success",
    props<{product: Product}>()
)