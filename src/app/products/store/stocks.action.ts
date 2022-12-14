import { createAction, props } from "@ngrx/store";
import { Stocks } from "./stocks";

export const invokeStocksAPI = createAction(
    '[Stocks API] Invoke Stocks Fetch API'
);

export const stocksFetchAPISuccess = createAction(
    "[Stocks API] Fetch API Succes",
    props<{stocks: Stocks[]}>()
)

export const invokeMoreStocksAPI = createAction(
    '[Stocks API] Get more products from stocks'
)

export const getMoreStocksSuccess = createAction(
    "[Stocks API] Fetch API Succes",
    props<{stocks: Stocks[]}>()
)
