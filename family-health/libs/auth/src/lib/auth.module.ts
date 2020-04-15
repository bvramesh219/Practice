import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { Routes as AuthRoutes } from './auth.routes';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@family-health/material';
import { SharedModule } from '@family-health/shared';
import { StoreModule } from '@ngrx/store';
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';

export const sharedAuthRoutes: Route[] = [
  { path: AuthRoutes.Login.path, component: LoginComponent },
  { path: '', redirectTo: AuthRoutes.Login.path, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer, {
      initialState: authInitialState
    })
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule {}
