import { Product } from './../../models/product.model';
import { BASKET_STORE } from './../../services/basket.providers';
import { Component, Inject, OnInit } from '@angular/core';
import { BasketStore } from '../../models/basket-store.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products!: Product[]
  constructor(@Inject(BASKET_STORE) readonly basketStore: BasketStore) { }
  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products=products });
  }

}
