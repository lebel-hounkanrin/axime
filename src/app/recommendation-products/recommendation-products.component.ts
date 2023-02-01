import { StocksService } from './../products/stocks.service';
import { BasketStoreService } from './../core/services/basket-store.service';
import { Product } from './../core/models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Stock } from '../core/models/product.model';
import { invokeStocksAPI } from '../products/store/stocks.action';
import { selectStocks } from '../products/store/stocks.selector';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-recommendation-products',
  templateUrl: './recommendation-products.component.html',
  styleUrls: ['./recommendation-products.component.css']
})
export class RecommendationProductsComponent implements OnInit {
  items = 5
  products!: Stock[];
  nbSlide! : any[];
  @ViewChild("ngcarousel", {static: true}) ngcarousel!: NgbCarousel;
  stocks$ = this.store.pipe(select(selectStocks));
  constructor(
    private store: Store,
    private basketStoreService: BasketStoreService,
    private stockService: StocksService,
    private productsService: ProductService,
    private config: NgbCarouselConfig
  ) { 
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe(data => {
      this.products = data;
      this.nbSlide= Array(Math.trunc(this.products.length / this.items));
    });
  }

  onAddToCart(product:Product): void{
    this.basketStoreService.addProductToBasket(product);
  }
  changePagination(e: NgbSlideEvent){ }
  goToNext(){
    this.ngcarousel.next()
  }
  goToPrev(){
    this.ngcarousel.prev();

  }

}
