import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, switchMap, tap, withLatestFrom } from "rxjs";
import { StocksService } from "../stocks.service";
import { getMoreStocksSuccess, getProductByTagAPI, getProductByTagSuccess, getStocksByCategoryAPI, getStocksByCategorySucess, invokeMoreStocksAPI, invokeStocksAPI, stocksFetchAPISuccess } from "./stocks.action";
import { selectMoreStocks, selectStocks } from "./stocks.selector";

@Injectable()
export class StocksEffect {
    constructor(
        private action$: Actions,
        private stocksService: StocksService,
        private store: Store
    ) { }

    loadStocks$ = createEffect(() =>
        this.action$.pipe(
            ofType(invokeStocksAPI),
            withLatestFrom(this.store.pipe(select(selectStocks))),
            mergeMap(([, stock]) => {
                if (stock.length > 0) return EMPTY
                return this.stocksService.get()
                    .pipe(map((data) => stocksFetchAPISuccess({ stocks: data })))
            })

        )
    )


    loadMoreProduct$ = createEffect(() =>
        this.action$.pipe(
            ofType(invokeMoreStocksAPI),
            withLatestFrom(this.store.pipe(select(selectMoreStocks))),
            mergeMap(([, stock]) => {
                return this.stocksService.getMoreProducts()
                    .pipe(
                        map(
                            (data) => {
                                return getMoreStocksSuccess({ stocks: [...data, ...stock] })
                            }
                        ),
                    )
            })
        )
    );

    getStocksByCategory$ = createEffect(() =>
        this.action$.pipe(
            ofType(getStocksByCategoryAPI),
            //withLatestFrom(this.store.pipe(select(selectStocks))),
            switchMap((action: any) => {
                return this.stocksService.getProductsInStockByCategory(action.category_name)
                    .pipe(map((data) => getStocksByCategorySucess({ stocks: data })))
            })
        )
    )

    getProductsByTagName$ = createEffect(() =>
        this.action$.pipe(
            ofType(getProductByTagAPI),
            switchMap((action: any) => {
                return this.stocksService.getProductsByTag(action.tag_name)
                    .pipe(map((data) => getProductByTagSuccess({ stocks: data })))
            })
        )
    )

}