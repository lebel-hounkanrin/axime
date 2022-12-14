import { Component, OnInit } from '@angular/core';
import { CategoryProductEnum } from './category.enum';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories! : any
  constructor() { }

  ngOnInit(): void {
    this.categories = CategoryProductEnum;
  }

}
