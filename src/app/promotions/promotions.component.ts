import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  images =[];
  products!: any[]
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProduct().subscribe(data => this.products = data);
  }

  moveRight(){
    const productDom = document.getElementsByClassName("products")[0];
    productDom.classList.add("animeRight");
    
  }

  moveLeft(){
    const productDom = document.getElementsByClassName("products")[0];
    productDom.classList.add("animeLeft");

  }
}
