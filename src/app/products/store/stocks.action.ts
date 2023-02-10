import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import { Stocks } from "./stocks";

export const invokeStocksAPI = createAction(
    '[Stocks API] Invoke Stocks Fetch API'
);

export const stocksFetchAPISuccess = createAction(
    "[Stocks API] Fetch API Succes",
    props<{stocks: Product[]}>()
)

export const invokeMoreStocksAPI = createAction(
    '[Stocks API] Get more products from stocks'
)

export const getMoreStocksSuccess = createAction(
    "[Stocks API] Fetch API Succes",
    props<{stocks: Product[]}>()
)

export const getStocksByCategoryAPI = createAction(
    '[Stocks API] Get products in stocks by category',
    props<{category_name: string}>()
)
export const getStocksByCategorySucess = createAction(
    "[Stocks API] Fetch API Succes",
    props<{stocks: Product[]}>()
)

export const getProductByTagAPI = createAction(
    "[Stocks API] Get products by tag name",
    props<{tag_name: string}>()
)

export const getProductByTagSuccess = createAction(
    "[Stocks API] Fetch API success",
    props<{stocks: Product[]}>()
)
