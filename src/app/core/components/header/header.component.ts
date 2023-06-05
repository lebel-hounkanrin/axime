import { Product } from './../../models/product.model';
import { BASKET_STORE } from './../../services/basket.providers';
import { Component, Inject, OnInit } from '@angular/core';
import { BasketStore } from '../../models/basket-store.interface';
import { StocksService } from 'src/app/products/stocks.service';
import { selectStocks } from 'src/app/products/store/stocks.selector';
import { select, Store } from '@ngrx/store';
import { getProductByTagAPI, invokeMoreStocksAPI } from 'src/app/products/store/stocks.action';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsConnected = false;
  currentUser:any = {};
  products!: Product[];
  tag: string = "";
  stocks$ = this.store.pipe(select(selectStocks));
  constructor(
    @Inject(BASKET_STORE) readonly basketStore: BasketStore,
    private store: Store,
    private readonly authService: AuthService
    ) { }
  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
    const elt1 = document.getElementById("d-btn");
    const elt2 = document.getElementById("dropdown-action");
    elt1?.addEventListener("mouseover", () => {
      elt2?.click();
    });
    if (this.authService.accessTokenValue) {
      this.userIsConnected = true;
      const userInfo = localStorage.getItem("currentUser");
      if(userInfo){
        this.currentUser = JSON.parse(userInfo);
      }
    }
  }

  searchProduct(){
   this.store.dispatch(getProductByTagAPI({tag_name: this.tag}));
  }
  goBackHome(){
    this.tag = ''
    this.store.dispatch(getProductByTagAPI({tag_name: ""}));
  }
}
