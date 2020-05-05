import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { SessionTimerModelComponent } from './components/session-timer-model/session-timer-model.component';
import { MaterialModule } from '@family-health/material';



@NgModule({
  declarations: [
    LayoutComponent,
    SessionTimerModelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ],
  entryComponents: [SessionTimerModelComponent]
})
export class LayoutModule { }
