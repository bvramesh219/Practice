import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const appRoutes = [
  {
    path: '',
    redirectTo: 'money-transfer',
    pathMatch: 'full'
  },
  {
    path: 'money-transfer',
    loadChildren: () => import('@backbase/money-transfer').then(m=>m.MoneyTransferModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
