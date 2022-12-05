import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  selectProduct!: any[];
  @Input()product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProductToBasket(product: Product){
    this.addToCart.emit(product)
  }
}
