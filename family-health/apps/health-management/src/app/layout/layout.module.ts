import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { SessionTimerModelComponent } from './components/session-timer-model/session-timer-model.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SessionTimerModelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ],
  entryComponents: [SessionTimerModelComponent]
})
export class LayoutModule { }
