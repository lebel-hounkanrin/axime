import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/models/product.model';
import { BasketStoreService } from '../core/services/basket-store.service';

@Component({
  selector: 'app-single-product-promotion',
  templateUrl: './single-product-promotion.component.html',
  styleUrls: ['./single-product-promotion.component.css']
})
export class SingleProductPromotionComponent implements OnInit {
  baseImageUrl = `${environment.baseApiUrl}/`
  @Input()product!: Product;
  constructor(private basketStoreService:BasketStoreService) { }

  ngOnInit(): void {
  }

  addProductToBasket(product: Product){
    this.basketStoreService.addProductToBasket(product);
  }

}
