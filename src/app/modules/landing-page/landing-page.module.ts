import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';

const landingRoutes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes),
    AppCommonModule
  ],
})
export class LandingPageModule { }
