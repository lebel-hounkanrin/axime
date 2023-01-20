import { BASKET_STORE_PROVIDERS } from './core/services/basket.providers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main/main.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { BasketComponent } from './basket/basket.component';
import { JwtInterceptor } from './shared/helpers/jwt-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AfterPayementComponent } from './after-payement/after-payement.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductsModule } from './products/products.module';
import { RecommendationProductsComponent } from './recommendation-products/recommendation-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategorieComponent,
    CategorieListComponent,
    BasketComponent,
    AfterPayementComponent,
    RecommendationProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    ProductsModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [
    BASKET_STORE_PROVIDERS,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor,  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
