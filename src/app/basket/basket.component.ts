import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
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
  productSelected: {product: Product, product_quantity: number}[] = [];
  price: number = 0;
  constructor(
    @Inject(BASKET_STORE) readonly basketStore: BasketStore,
    private basketStoreService: BasketStoreService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products = products });
    this.products.sort((p1, p2) => p2.sell_price -p1.sell_price);
    this.products.map(product => this.productSelected.push({product: product, product_quantity:1}));
    this.updatePrice()
  }
  removeFromBasket(p: Product, e: Event) {
    e.preventDefault();
    this.productSelected = this.productSelected.filter(product => product.product.id !== p.id)
    this.basketStoreService.removeProductFromBasket(p)
    this.updatePrice()
    
  }
  updatePrice(){
    this.price =this.productSelected.map((a => a.product_quantity*a.product.sell_price)).reduce((a, b) => a+b, 0)
  }
  onQuantityChanges(quantity: number, product: Product) {
    const item =this.productSelected.find(prod => prod.product.id == product.id);
    item ? item.product_quantity = quantity : 1;
    this.updatePrice();
  }

  onSubmitForm(){
    const order :{productId: string, product_quantity: number}[] = [];
    this.productSelected.map(prod => order.push({productId: prod.product.id, product_quantity: prod.product_quantity}))
    this.basketStoreService.orderProduct(order).subscribe(
     data => this.router.navigateByUrl("paid")
   );
  
  }

}
