import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { InsuranceCardComponent } from './insurance-card/insurance-card.component';

const landingRoutes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    InsuranceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes),
    AppCommonModule
  ],
})
export class LandingPageModule { }
