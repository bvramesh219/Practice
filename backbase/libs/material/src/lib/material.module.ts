import { NgModule } from '@angular/core';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

const materiaModules = [
  MatFormFieldModule, 
  MatInputModule, 
  MatAutocompleteModule,
  MatTableModule,
  MatButtonToggleModule,
  MatSortModule,
  MatIconModule
];
@NgModule({
  imports: materiaModules,
  exports: materiaModules,
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
export class MaterialModule {}
