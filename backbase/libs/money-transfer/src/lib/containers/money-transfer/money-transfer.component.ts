import { Component, OnInit } from '@angular/core';
import { BaseStateComponent } from '@backbase/shared';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User, Account, TransactionRequest, Transaction } from '@backbase/models';
import { GetLoggedUser, GetUserRecipents, GetTransactions } from '../../+state/transfer.actions';
import { TRANSFER_QUERY } from '../../+state/transfer.selectors';
import { transition } from '@angular/animations';


@Component({
  selector: 'bb-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent extends BaseStateComponent implements OnInit {
  loggedUser: User = null;
  recipentAccounts$: Observable<Account[]> = null;
  userTransactions: Transaction[] = []

  constructor(
    store: Store<any>) {
      super(store);
  }

  ngOnInit(): void {
    this.dispatchAction(new GetLoggedUser());
    this.subscribeState(TRANSFER_QUERY.getLoggedUser)
          .subscribe((_loggedUser: User) => {
            if(!!_loggedUser) {
              this.loggedUser = _loggedUser;
              this.dispatchAction(new GetUserRecipents(_loggedUser.userId));
            }
    });
    this.recipentAccounts$ = this.subscribeState(TRANSFER_QUERY.getLoggedUserRecipents);

    this.dispatchAction(new GetTransactions());
    this.subscribeState(TRANSFER_QUERY.getLoggedUserTransactions)
          .subscribe((_transactions: Transaction[]) => {
            if(!!_transactions) {
              this.userTransactions = _transactions;
            }
          });


  }

  submitTransfer(transReq: TransactionRequest) {
    console.log(transReq);
  }
}
