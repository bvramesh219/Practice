import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@backbase/material';
import { BoxComponent } from './components/box/box.component';


const SharedComponents = [BoxComponent]
@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,
    HttpClientModule
  ],
  declarations: SharedComponents,
  exports: SharedComponents
})
export class SharedModule {}
