import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Product } from './../../core/models/product.model';

import { Component, DoCheck, OnInit } from '@angular/core';
import { BasketStoreService } from 'src/app/core/services/basket-store.service';
import { selctProductByTag,  selectStocks } from '../store/stocks.selector';
import { invokeMoreStocksAPI, invokeStocksAPI } from '../store/stocks.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck {
  products!: Product[];
  constructor(private store: Store) { }
    stocks$ = this.store.pipe(select(selectStocks));
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

  getMore(){
    this.store.dispatch(invokeMoreStocksAPI());
  }

}
