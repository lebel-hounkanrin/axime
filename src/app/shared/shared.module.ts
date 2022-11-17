import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BASKET_STORE_PROVIDERS } from '../core/services/basket.providers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NgbModule
  ]
})
export class SharedModule { }
