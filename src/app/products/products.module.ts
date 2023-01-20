import { getProductByTagSuccess } from './store/stocks.action';
import { StocksEffect } from './store/stocks.effect';
import { EffectsModule } from '@ngrx/effects';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { getProductsByCategory, getProductsByTags, stocksReducer } from './store/stocks.reducer';



@NgModule({
  declarations: [
    ProductListComponent,
    SingleProductComponent
  ],
  imports: [
    StoreModule.forFeature("stocks", stocksReducer),
    StoreModule.forFeature("productCategory", getProductsByCategory),
    StoreModule.forFeature("getProductByTag", getProductsByTags),
    EffectsModule.forFeature([StocksEffect, ]),
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    ProductListComponent,
    SingleProductComponent
  ]
})
export class ProductsModule { }
