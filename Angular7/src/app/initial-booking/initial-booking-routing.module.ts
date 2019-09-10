import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialBookingComponent } from './initial-booking.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: 'booking',
    component: InitialBookingComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'results', component: SearchResultsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialBookingRoutingModule { }
