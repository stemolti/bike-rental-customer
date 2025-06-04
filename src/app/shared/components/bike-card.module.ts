import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeCardComponent } from './bike-card/bike-card.component';



@NgModule({
  declarations: [
    BikeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BikeCardComponent
  ]
})
export class BikeCardModule { }
