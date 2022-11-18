import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PubliciteComponent } from './components/publicite/publicite.component';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PubliciteComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ProductService,
  ],
  exports: [HeaderComponent, FooterComponent, CarrouselComponent, PubliciteComponent]
})
export class CoreModule { }
