import { BASKET_STORE_PROVIDERS } from './core/services/basket.providers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main/main.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    MainComponent,
    CategorieComponent,
    CategorieListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    
  ],
  providers: [BASKET_STORE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
