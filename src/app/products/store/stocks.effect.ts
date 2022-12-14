import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { StocksService } from "../stocks.service";
import { invokeMoreStocksAPI, invokeStocksAPI, stocksFetchAPISuccess } from "./stocks.action";
import { selectMoreStocks, selectStocks } from "./stocks.selector";

@Injectable()
export class StocksEffect {
    constructor(
        private action$: Actions,
        private stocksService: StocksService,
        private store: Store
    ){}

    loadStocks$ = createEffect(() => 
        this.action$.pipe(
            ofType(invokeStocksAPI),
            withLatestFrom(this.store.pipe(select(selectStocks))),
            mergeMap(([, stock]) => {
                if(stock.length > 0) return EMPTY
                return this.stocksService.get()
                .pipe(map((data) => stocksFetchAPISuccess({stocks: data})))
            })

        )
    )

  
    loadMoreProduct$ = createEffect(() => 
        this.action$.pipe(
            ofType(invokeMoreStocksAPI),
            withLatestFrom(this.store.pipe(select(selectMoreStocks))),
            mergeMap(([, stock]) => {
                //if(stock.length > 0) { console.log("hi"); return EMPTY}
                return this.stocksService.getMoreProducts()
                .pipe(map((data) => stocksFetchAPISuccess({stocks: data})))
            })
            )
    )
}