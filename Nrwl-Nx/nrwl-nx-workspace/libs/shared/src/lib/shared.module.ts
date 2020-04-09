import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CountryListComponent],
  exports: [CountryListComponent]
})
export class SharedModule {}
