import { createFeatureSelector } from "@ngrx/store";
import { Stocks } from "./stocks";

export const selectStocks = createFeatureSelector<Stocks[]>('stocks');
export const selectMoreStocks = createFeatureSelector<Stocks[]>('stocks');
export const selectProductByCategory = createFeatureSelector<Stocks[]>("productCategory");
export const selctProductByTag = createFeatureSelector<Stocks[]>("getProductByTag");
export const selectRecommendationProducts = createFeatureSelector<Stocks[]>("getProducts")