import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'

const materiaModules = [MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule];

@NgModule({
  imports: materiaModules,
  exports: materiaModules
})
export class MaterialModule {}
