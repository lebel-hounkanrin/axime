import { Product, Stock } from './../../core/models/product.model';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { BasketStoreService } from 'src/app/core/services/basket-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Stock[];
  constructor(private productService: ProductService,
    private basketStoreService:BasketStoreService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => {
      this.products=products
    })
  }
  onAddToCart(product:Product): void{
    this.basketStoreService.addProductToBasket(product);
  }

}
