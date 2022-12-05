import { createReducer, on } from "@ngrx/store";
import { Stocks } from "./stocks";
import { stocksFetchAPISuccess } from "./stocks.action";

export const initialState: ReadonlyArray<Stocks> =[];

export const stocksReducer = createReducer(
    initialState,
    on(stocksFetchAPISuccess, (state, {stocks}) =>{
        return stocks
    })    
)