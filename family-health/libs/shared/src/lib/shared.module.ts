import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MaterialModule } from '@family-health/material';
import { ButtonSpinnerComponent } from './components/button-spinner/button-spinner.component';

const SharedComponents = [LoadingIndicatorComponent, ButtonSpinnerComponent]

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: SharedComponents,
  exports: SharedComponents
})
export class SharedModule {}
