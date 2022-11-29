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
import { JwtInterceptor } from './shared/helpers/jwt-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AfterPayementComponent } from './after-payement/after-payement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    MainComponent,
    CategorieComponent,
    CategorieListComponent,
    BasketComponent,
    AfterPayementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    
  ],
  providers: [
    BASKET_STORE_PROVIDERS,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
