import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { AppCommonModule } from './modules/app-common/app-common.module';
import { AdminModule } from './modules/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAuthenticationModule,
    LandingPageModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
