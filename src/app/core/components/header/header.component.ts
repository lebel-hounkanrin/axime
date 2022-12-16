import { Product } from './../../models/product.model';
import { BASKET_STORE } from './../../services/basket.providers';
import { Component, Inject, OnInit } from '@angular/core';
import { BasketStore } from '../../models/basket-store.interface';
import { StocksService } from 'src/app/products/stocks.service';
import { selectStocks } from 'src/app/products/store/stocks.selector';
import { select, Store } from '@ngrx/store';
import { getProductByTagAPI } from 'src/app/products/store/stocks.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products!: Product[];
  tag: string = "";
  stocks$ = this.store.pipe(select(selectStocks));
  constructor(
    @Inject(BASKET_STORE) readonly basketStore: BasketStore,
    private stocksService: StocksService,
    private store: Store
    ) { }
  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
  }

  searchProduct(){
   this.store.dispatch(getProductByTagAPI({tag_name: this.tag}));
   this.tag = ''
  }

}
