import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { selectStocks } from '../products/store/stocks.selector';
import { getStocksByCategoryAPI} from '../products/store/stocks.action';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  @Input() category_name!: string;
  stocks$ = this.store.pipe(select(selectStocks));
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  getStocksByCategory(category_name: string){
    this.store.dispatch(getStocksByCategoryAPI({category_name: category_name}));
    //this.stocks$.subscribe(data => console.log(data))
  }
}
