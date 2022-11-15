import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PubliciteComponent } from './components/publicite/publicite.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    PubliciteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent, CarrouselComponent, PubliciteComponent]
})
export class CoreModule { }
