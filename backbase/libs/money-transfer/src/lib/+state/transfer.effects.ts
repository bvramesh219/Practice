import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as TransferActions from './transfer.actions';
import { TransferActionTypes } from './transfer.actions';
import { UserService } from '@backbase/shared';
import { User, Account, Transaction } from '@backbase/models';


@Injectable()
export class TransferEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService
        ) {

    }

    @Effect()
    loggedUser$ = this._actions$.pipe(
      ofType(TransferActionTypes.GetLoggedUser),
      mergeMap((action: TransferActions.GetLoggedUser) =>
        this._userService.getLoginUser()
          .pipe(
            map((loggedUser: User) => {
              return new TransferActions.GetLoggedUserSuccess(loggedUser);
            }),
            catchError(error => of(new TransferActions.GetLoggedUserFail("error occured while fetching user")))
          )
      )
    );

    @Effect()
    userRecipents$ = this._actions$.pipe(
      ofType(TransferActionTypes.GetUserRecipents),
      mergeMap((action: TransferActions.GetUserRecipents) =>
        this._userService.getRecipents(action.payload)
          .pipe(
            map((recipents: Account[]) => {
              return new TransferActions.GetUserRecipentsSuccess(recipents);
            }),
            catchError(error => of(new TransferActions.GetUserRecipentsFail("error occured while fetching recipents")))
          )
      )
    );

    @Effect()
    transactions$ = this._actions$.pipe(
      ofType(TransferActionTypes.GetTransactions),
      mergeMap((action: TransferActions.GetTransactions) =>
        this._userService.getTransactions()
          .pipe(
            map((transactions: Transaction[]) => {
              return new TransferActions.GetTransactionsSuccess(transactions);
            }),
            catchError(error => of(new TransferActions.GetTransactionsFail("error occured while fetching transactions")))
          )
      )
    );
}