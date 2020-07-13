import { Component, OnInit } from '@angular/core';
import { BaseStateComponent } from '@backbase/shared';
import { Store } from '@ngrx/store';
import { GetLoggedUser } from 'libs/money-transfer/src/+state/transfer.actions';
import { TRANSFER_QUERY } from 'libs/money-transfer/src/+state/transfer.selectors';
import { user } from '@backbase/models';

@Component({
  selector: 'bb-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent extends BaseStateComponent implements OnInit {
  loggedUser: user = null;

  constructor(
    store: Store<any>) {
      super(store);
  }

  ngOnInit(): void {
    this.dispatchAction(new GetLoggedUser());
    this.subscribeState(TRANSFER_QUERY.getLoggedUser).subscribe(_loggedUser => {
      if(!!_loggedUser) {
        this.loggedUser = _loggedUser;
      }
    })
  }
}
