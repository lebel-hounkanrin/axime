import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../core/services/product.service';

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
  products: any[] =[];
  p: number = 1;
  constructor(private productsService: ProductService, private config: NgbCarouselConfig) { 
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe(data => {
      this.products = data;
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
