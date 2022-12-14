import { createReducer, on } from "@ngrx/store";
import { Stocks } from "./stocks";
import { getMoreStocksSuccess, getStocksByCategorySucess, stocksFetchAPISuccess } from "./stocks.action";

export const initialState: ReadonlyArray<Stocks> =[];

export const stocksReducer = createReducer(
    initialState,
    on(stocksFetchAPISuccess, (state, {stocks}) =>{
        return stocks
    })    
)

export const getMoreProduct = createReducer(
    initialState, 
    on(getMoreStocksSuccess, (state, {stocks}) => {
        return stocks
    })
)
export const getProductsByCategory = createReducer(
    initialState, 
    on(getStocksByCategorySucess, (state, {stocks}) => {
        return stocks
    })
)
