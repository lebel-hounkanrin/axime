import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../core/models/product.model';
import { BasketStoreService } from '../core/services/basket-store.service';
import { ProductService } from '../core/services/product.service';
import { Products } from '../products/store/stocks';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  @ViewChild("ngcarousel", {static: true}) ngcarousel!: NgbCarousel;
  items = 5
  nbSlide! : any[];
  images =[];
  products: Products[] =[];
  p: number = 1;
  constructor(private productsService: ProductService,
    private basketStoreService: BasketStoreService,
    private config: NgbCarouselConfig) { 
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe(data => {
      this.products = data;
      if(data.length <10){
        this.productsService.getRandom(10-data.length).subscribe(data => {
          this.products = [...this.products, ...data]
        })
      }
      this.nbSlide= Array(Math.trunc(this.products.length / this.items));
    });
  }
  changePagination(e: NgbSlideEvent){ }
  goToNext(){
    this.ngcarousel.next()
  }
  goToPrev(){
    this.ngcarousel.prev();
  }
}
