import { Product } from './../core/models/product.model';
import { BasketStore } from './../core/models/basket-store.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { BASKET_STORE } from '../core/services/basket.providers';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products!: Product[];
  price: number = 0;
  constructor(@Inject(BASKET_STORE) readonly basketStore: BasketStore) { }

  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
    this.products.forEach(p => this.price+=p.price)
  }
  removeFromBasket(p: Product){
    this.products = this.products.filter(product => product.id !== p.id)
    this.price -= p.price
  }

}
