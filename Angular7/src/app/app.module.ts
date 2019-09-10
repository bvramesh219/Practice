import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { InitialBookingModule } from './initial-booking/initial-booking.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitialBookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
