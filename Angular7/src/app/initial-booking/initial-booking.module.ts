import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialBookingRoutingModule } from './initial-booking-routing.module';
import { InitialBookingComponent } from './initial-booking.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [InitialBookingComponent, SearchComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    InitialBookingRoutingModule
  ]
})
export class InitialBookingModule { }
