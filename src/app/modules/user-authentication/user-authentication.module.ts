import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
const userAuthRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(userAuthRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserAuthenticationModule { }
