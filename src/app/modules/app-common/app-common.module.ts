import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';



@NgModule({
  declarations: [
    AppNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppCommonModule { }
