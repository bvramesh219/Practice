import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

const materiaModules = [MatProgressSpinnerModule];

@NgModule({
  imports: materiaModules,
  exports: materiaModules
})
export class MaterialModule {}
