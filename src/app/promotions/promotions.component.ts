import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  @ViewChild("ngcarousel", {static: true}) ngcarousel!: NgbCarousel
  images =[];
  products: any[] =[];
  constructor(private productsService: ProductService, private config: NgbCarouselConfig) { 
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.productsService.getProduct().subscribe(data => this.products = data);
  }
  display(e: NgbSlideEvent){
  }
  goToNext(){
    this.ngcarousel.next()
  }
  goToPrev(){
    this.ngcarousel.prev()
  }
}
