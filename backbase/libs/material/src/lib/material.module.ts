import { NgModule } from '@angular/core';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

const materiaModules = [MatFormFieldModule, MatInputModule];
@NgModule({
  imports: materiaModules,
  exports: materiaModules,
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
export class MaterialModule {}
