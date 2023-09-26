import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const landingRoutes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes)
  ],
})
export class LandingPageModule { }
