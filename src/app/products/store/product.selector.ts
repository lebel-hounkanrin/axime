import { Product } from 'src/app/core/models/product.model';
import { createFeatureSelector } from '@ngrx/store';
export const productSelectors = createFeatureSelector<Product>('product')