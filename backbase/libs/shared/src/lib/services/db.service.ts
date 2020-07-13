import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { account } from '@backbase/models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private _db = {
    users: [
      {id: 1, userName: "Ramesh Babu", isLogged: true, recipents: ["23456","34567"]},
      {id: 2, userName: "Georgia Power Electric Company", isLogged: false, recipents: []},
      {id: 3, userName: "Whole Foods", isLogged: false, recipents: []},
      {id: 4, userName: "Southern Electric Company", isLogged: false, recipents: []}
    ],
    Accounts: [
      {accountNumber: "12345", accountType: "Free Checking", balance:500, owner: 1},
      {accountNumber: "23456", accountType: "Free Checking", balance:200, owner: 2},
      {accountNumber: "34567", accountType: "Free Checking", balance:1000, owner: 3},
      {accountNumber: "45678", accountType: "Free Checking", balance:567, owner: 4}
    ]
  }

  constructor() { }

  get<T>(url: string) {
    if(url.indexOf("user/login-user")!==-1) {
      return this._getLoggedUser();
    } else if(url.indexOf("user/recipents")!==-1) {
      const userId: number =  + url.substring(url.lastIndexOf("/")+1);
      return this._getUserRecipents(userId);
    }
  }

  _getLoggedUser() {
    const _luser = this._db.users.find(_user => _user.isLogged);
    const _account = this._getAccountByOwnerId(_luser.id);
    

    return of({
      userId: _luser.id,
      userName: _luser.userName,
      account: {
        accountType: _account.accountType,
        accountNumber: _account.accountNumber,
        balance: _account.balance,
        accountOwner: _luser.userName
      }
    } as any);

  }

  _getUserRecipents(userId: number) {
    const _luser = this._db.users.find(_user => _user.id === userId);
    const _recipents = _luser.recipents;

    const userRecipents = [];
    _recipents.forEach(recipent => {
      const _recipentAccount = this._getAccountByAccountNumber(recipent);
      const _owner = this._db.users.find(_user => _user.id === _recipentAccount.owner);
      userRecipents.push({
        accountType: _recipentAccount.accountType,
        accountNumber: _recipentAccount.accountNumber,
        balance: _recipentAccount.balance,
        accountOwner: _owner.userName
      });
    })

    return of(userRecipents as any);
  }

  _getAccountByOwnerId(id) {
    return this._db.Accounts.find(_account => _account.owner === id);
  }

  _getAccountByAccountNumber(accountNumber) {
    return this._db.Accounts.find(_account => _account.accountNumber === accountNumber);
  }
}
