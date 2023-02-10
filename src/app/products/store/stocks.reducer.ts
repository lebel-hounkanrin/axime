import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import { getMoreStocksSuccess, getProductByTagSuccess, getStocksByCategorySucess, stocksFetchAPISuccess } from "./stocks.action";

export const initialState: ReadonlyArray<Product> =[];

export const stocksReducer = createReducer(
    initialState,
    on(stocksFetchAPISuccess, (state, {stocks}) =>{
        return stocks
    }),
    on(getMoreStocksSuccess, (state, {stocks}) => {
        return  stocks
    })   
)

export const getProductsByCategory = createReducer(
    initialState, 
    on(getStocksByCategorySucess, (state, {stocks}) => {
        return stocks
    })
)

export const getProductsByTags = createReducer(
    initialState, 
    on(getProductByTagSuccess, (state, {stocks}) => {
        return stocks
    })
)


