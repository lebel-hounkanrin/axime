import { StocksService } from './../stocks.service';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Product, Stock } from './../../core/models/product.model';

import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { BasketStoreService } from 'src/app/core/services/basket-store.service';
import { selctProductByTag, selectMoreStocks, selectStocks } from '../store/stocks.selector';
import { invokeMoreStocksAPI, invokeStocksAPI } from '../store/stocks.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck {
  products!: Stock[];
  products$!: Observable<Product>;
  constructor(private productService: ProductService,
    private stocksService: StocksService,
    private basketStoreService:BasketStoreService,
    private store: Store
    ) { }
    stocks$ = this.store.pipe(select(selectStocks));
    moreStocks$ = this.store.pipe(select(selectMoreStocks));
    categorie$ = this.store.pipe(select(selctProductByTag));
  ngOnInit(): void {
    this.store.dispatch(invokeStocksAPI());
    this.stocks$.subscribe(data => {
      this.products = data
    });
  }
  ngDoCheck(): void {
    let data :any[] = [];
    this.categorie$.subscribe(cataegories => data = cataegories);
    if(data.length > 0){
      this.categorie$.subscribe(data => {
        this.products = data;
      });
    }
      
  }
  onAddToCart(product:Product): void{
    this.basketStoreService.addProductToBasket(product);
  }
  getMore(){
    this.store.dispatch(invokeMoreStocksAPI());
    //this.moreStocks$.subscribe(data => console.log(data))
  }

}
