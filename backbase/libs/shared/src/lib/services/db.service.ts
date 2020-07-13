import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { user } from '@backbase/models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private _db = {
    users: [
      {id: 1, userName: "Ramesh Babu", isLogged: true, accountNumber: 1}
    ],
    Accounts: [
      {accountNumber: 1, accountType: 0, balance:1500}
  ]
  }

  constructor() { }

  get<T>(url: string) {
    if(url.indexOf("user/login-user")!==-1) {
      return this._getLoggedUser();
    }
  }

  _getLoggedUser() {
    const _luser = this._db.users.find(_user => _user.isLogged);
    const account = this._getAccount(_luser.accountNumber);

    return of({
      userId: _luser.id,
      userName: _luser.userName,
      account: account
    } as any);

  }

  _getAccount(number) {
    return this._db.Accounts.find(account => account.accountNumber === number);
  }

}
