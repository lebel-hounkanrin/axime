import { BasketStoreService } from './../core/services/basket-store.service';
import { Product } from './../core/models/product.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Stock } from '../core/models/product.model';
import { invokeStocksAPI } from '../products/store/stocks.action';
import { selectStocks } from '../products/store/stocks.selector';

@Component({
  selector: 'app-recommendation-products',
  templateUrl: './recommendation-products.component.html',
  styleUrls: ['./recommendation-products.component.css']
})
export class RecommendationProductsComponent implements OnInit {
  products!: Stock[];
  stocks$ = this.store.pipe(select(selectStocks));
  constructor(
    private store: Store,
    private basketStoreService: BasketStoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(invokeStocksAPI());
    this.stocks$.subscribe(data => {
      this.products = data
    });
  }

  onAddToCart(product:Product): void{
    this.basketStoreService.addProductToBasket(product);
  }

}
