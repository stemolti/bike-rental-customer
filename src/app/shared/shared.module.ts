import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableIfUnauthDirective } from './directives/disable-if-unauth.directive';



@NgModule({
  declarations: [
    DisableIfUnauthDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
