import { Component, Input, OnInit, } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { BasketStoreService } from 'src/app/core/services/basket-store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  baseImageUrl = `${environment.baseApiUrl}/`
  @Input()product!: Product;
  constructor(private basketStoreService:BasketStoreService) { }

  ngOnInit(): void {
  }

  addProductToBasket(product: Product){
    this.basketStoreService.addProductToBasket(product);
  }
}
