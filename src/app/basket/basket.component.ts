import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Product } from './../core/models/product.model';
import { BasketStore } from './../core/models/basket-store.interface';
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { BASKET_STORE } from '../core/services/basket.providers';
import { BasketStoreService } from '../core/services/basket-store.service';
import { Store } from '@ngrx/store';
import { increaseQuantity } from '../products/store/product.action';
import { selectStocks } from '../products/store/stocks.selector';
import { Stocks } from '../products/store/stocks';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, DoCheck {
  products!: Product[];
  price: number = 0;
  missedProductName : Product = new Product();
  missedQuantity: number =0;
  showModal=false;
  missedProductMsg ="";
  displayButton = true;
  constructor(
    @Inject(BASKET_STORE) readonly basketStore: BasketStore,
    private basketStoreService: BasketStoreService,
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router) { }
    stocks! :Stocks[];
    maxValues: {[id: string]: any[]} = {};
  ngOnInit(): void {
    this.basketStore.products$.subscribe((products: Product[]) => { this.products = products });
    this.store.select(selectStocks).subscribe(data => this.stocks= data);
    this.stocks.map(stock => this.maxValues[stock.product.id] = Array(stock.quantity) )
    console.log(this.maxValues)
    this.updatePrice()
  }
  ngDoCheck(): void {
      if(this.products.length > 0){
        this.updatePrice()
      }
  }
  removeFromBasket(p: Product, e?: Event) {
    e?.preventDefault();
    this.products = this.products.filter(product => product.id !== p.id)
    this.basketStoreService.removeProductFromBasket(p)
    this.updatePrice()
    
  }
  updatePrice(){
    this.price =this.products.map(product => product.quantity*product.sell_price).reduce((a, b) => a+b, 0)
  }
  onQuantityChanges(quantity: number, product: Product) {
    this.basketStoreService.updateQuantity(product, quantity)
    this.updatePrice();
  }

  onSubmitForm(){
    const order :{productId: string, product_quantity: number}[] = [];
    this.products.map(prod => order.push({productId: prod.id, product_quantity: prod.quantity}))
    this.basketStoreService.orderProduct(order).subscribe({
      next: (data) => this.router.navigateByUrl("paid"),
      error: async (error: any) => {
         console.log(error.status)
         console.log(error.error)
         const button = document.getElementById("initModal");
         if(error.error.errorType === "productNotExistInStock"){
            const productId = error.error.productId;
            this.missedProductName = this.products.filter(p => p.id == productId)[0];
            this.missedProductMsg = `Oups quelq'un vient de prendre toute la quantité de ${this.missedProductName.name} qui reste.`;
            this.displayButton= false;
            this.removeFromBasket(this.missedProductName)
            button?.click();
         }
         if(error.error.errorType === "InsufficientAmountOfProduct"){
          const productId = error.error.productId;  
          const quantity = error.error.quantityAvailable;  
          this.missedProductName = this.products.filter(p => p.id == productId)[0];
          this.missedQuantity = quantity;
          this.onQuantityChanges(quantity, this.missedProductName);
          this.missedProductMsg = `Oups Le produit ${this.missedProductName.name} ne reste plus en quantitité suffisante. Vous pouvez en prendre ${this.missedQuantity}`
          this.showModal = true;
          button?.click();
         }
      }
    });
  }

}
