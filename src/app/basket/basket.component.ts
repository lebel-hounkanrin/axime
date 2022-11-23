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
    private basketStoreService: BasketStoreService) { }

  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products = products });
    this.products.sort((p1, p2) => p2.id -p1.id);
    this.products.forEach(p => this.price += p.price * p.quantity);
  }
  removeFromBasket(p: Product, e: Event) {
    e.preventDefault()
    this.basketStoreService.removeProductFromBasket(p)
    this.basketStore.products$.subscribe((products: Product[]) => { this.products = products });
    this.updatePrice()
  }
  updatePrice(){
    this.price = this.products.map(p => p.price*p.quantity).reduce((q1, q2) => q1+q2);
  }
  onQuantityChanges(quantity: number, product: Product) {
    console.log(product)
    product.quantity = quantity;
    this.products = [...this.products].filter(p => p.id !== product.id).concat(product).sort(
      (p1, p2) => p2.id - p1.id 
    );
    this.updatePrice()
  }

}
