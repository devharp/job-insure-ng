import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'auth', loadChildren: () => import('./modules/user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
