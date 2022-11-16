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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SingleProductComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
