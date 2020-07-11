import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

const materiaModules = [MatIconModule];
@NgModule({
  imports: materiaModules,
  exports: materiaModules
})
export class MaterialModule {}
