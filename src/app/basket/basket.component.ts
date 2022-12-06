import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Product } from './../core/models/product.model';
import { BasketStore } from './../core/models/basket-store.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { BASKET_STORE } from '../core/services/basket.providers';
import { BasketStoreService } from '../core/services/basket-store.service';
import { Store } from '@ngrx/store';
import { increaseQuantity } from '../products/store/product.action';

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
    private basketStoreService: BasketStoreService,
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router) { }

  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products = products });
    this.updatePrice()
    //this.products.map(product => this.productSelected.push({product: product, product_quantity:1}));
  }
  removeFromBasket(p: Product, e: Event) {
    e.preventDefault();
    this.products = this.products.filter(product => product.id !== p.id)
    this.basketStoreService.removeProductFromBasket(p)
    this.updatePrice()
    
  }
  updatePrice(){
    this.price =this.products.map(product => product.quantity*product.sell_price).reduce((a, b) => a+b, 0)
    //this.price =this.productSelected.map((a => a.product_quantity*a.product.sell_price)).reduce((a, b) => a+b, 0)
  }
  onQuantityChanges(quantity: number, product: Product) {
    //const item =this.products.find(prod => prod.id == product.id);
    this.basketStoreService.updateQuantity(product, quantity)
    this.updatePrice();
  }

  onSubmitForm(){
    const order :{productId: string, product_quantity: number}[] = [];
    this.products.map(prod => order.push({productId: prod.id, product_quantity: prod.quantity}))
    this.basketStoreService.orderProduct(order).subscribe(
     data => this.router.navigateByUrl("paid")
   );
  
  }

}
