import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule } from '@family-health/shared'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducer, metaReducers, rootInitialState } from './+state/app.reducer';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    StoreModule.forRoot(
      appReducer,
      { metaReducers, initialState: rootInitialState }
    ),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
