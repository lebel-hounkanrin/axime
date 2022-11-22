import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
