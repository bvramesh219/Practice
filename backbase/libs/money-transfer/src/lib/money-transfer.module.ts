import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { Routes as MoneyTransferRoutes } from './money-transfer.routes';
import { MoneyTransferComponent } from './containers/money-transfer/money-transfer.component';
import { SharedModule } from '@backbase/shared';

export const sharedAuthRoutes: Route[] = [
  { path: MoneyTransferRoutes.Transfer.path, component: MoneyTransferComponent },
  { path: '', redirectTo: MoneyTransferRoutes.Transfer.path, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedAuthRoutes),
    SharedModule
  ],
  declarations: [MoneyTransferComponent]
})
export class MoneyTransferModule {}
