import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store';
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';
import { reducer, LoginEffects} from './state';
import { CommonModule } from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login-Component/login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from './login/login-service.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginShellComponent } from './login/login-shell/login-shell.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginShellComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({app:reducer}),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      name:'Ngrx CUT Hello World',
      maxAge: 35,
      logOnly:environment.production
    }),
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'login', component:LoginShellComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
