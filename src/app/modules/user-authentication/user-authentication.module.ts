import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(userAuthRoutes)
  ]
})
export class UserAuthenticationModule { }
