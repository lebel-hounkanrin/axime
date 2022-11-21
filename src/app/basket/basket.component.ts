import { Product } from './../core/models/product.model';
import { BasketStore } from './../core/models/basket-store.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { BASKET_STORE } from '../core/services/basket.providers';
import { BasketStoreService } from '../core/services/basket-store.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products!: Product[];
  price: number = 0;
  constructor(
    @Inject(BASKET_STORE) readonly basketStore: BasketStore,
    private basketStoreService:BasketStoreService) { }

  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
    this.products.forEach(p => this.price+=p.price*p.quantity)
  }
  removeFromBasket(p: Product){
    this.basketStoreService.removeProductFromBasket(p)
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
    const prices :number[] = [];
    this.products.forEach(product => prices.push(product.price));
    this.price = prices.reduce((p1, p2) => p1+p2, 0)
  }

}
