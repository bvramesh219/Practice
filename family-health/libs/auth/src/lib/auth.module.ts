import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { Routes as AuthRoutes } from './auth.routes';

export const sharedAuthRoutes: Route[] = [
  { path: AuthRoutes.Login.path, component: LoginComponent },
  { path: '', redirectTo: AuthRoutes.Login.path, pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
