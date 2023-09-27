import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';



@NgModule({
  declarations: [
    AppNavbarComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppNavbarComponent,
    AppFooterComponent
  ]
})
export class AppCommonModule { }
