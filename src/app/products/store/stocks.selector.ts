import { createFeatureSelector } from "@ngrx/store";
import { Products} from "./stocks";

export const selectStocks = createFeatureSelector<Products[]>('stocks');
export const selectMoreStocks = createFeatureSelector<Products[]>('stocks');
export const selectProductByCategory = createFeatureSelector<Products[]>("productCategory");
export const selctProductByTag = createFeatureSelector<Products[]>("getProductByTag");
export const selectRecommendationProducts = createFeatureSelector<Products[]>("getProducts")
