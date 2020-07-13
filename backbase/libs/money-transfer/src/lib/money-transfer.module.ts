import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { Routes as MoneyTransferRoutes } from './money-transfer.routes';
import { MoneyTransferComponent } from './containers/money-transfer/money-transfer.component';
import { SharedModule } from '@backbase/shared';
import { MaterialModule } from '@backbase/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferComponent } from './components/transfer/transfer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { transferReducer, transferInitialState } from './+state/transfer.reducer';
import { TransferEffects } from './+state/transfer.effects';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const sharedAuthRoutes: Route[] = [
  { path: MoneyTransferRoutes.Transfer.path, component: MoneyTransferComponent },
  { path: '', redirectTo: MoneyTransferRoutes.Transfer.path, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedAuthRoutes),
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transfer', transferReducer, {
      initialState: transferInitialState
    }),
    EffectsModule.forFeature([TransferEffects])
  ],
  declarations: [MoneyTransferComponent, TransferComponent, TransactionsComponent]
})
export class MoneyTransferModule {}
