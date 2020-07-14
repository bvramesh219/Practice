import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as TransferActions from './transfer.actions';
import { TransferActionTypes } from './transfer.actions';
import { UserService, TransactionService } from '@backbase/shared';
import { User, Account, Transaction } from '@backbase/models';


@Injectable()
export class TransferEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService,
        private _transactionService: TransactionService
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
        this._transactionService.getTransactions()
          .pipe(
            map((transactions: Transaction[]) => {
              return new TransferActions.GetTransactionsSuccess(transactions);
            }),
            catchError(error => of(new TransferActions.GetTransactionsFail("error occured while fetching transactions")))
          )
      )
    );

    @Effect()
    submitTransaction$ = this._actions$.pipe(
      ofType(TransferActionTypes.SubmitTransaction),
      mergeMap((action: TransferActions.SubmitTransaction) =>
        this._transactionService.postTransaction(action.payload)
          .pipe(
            map((isSuccess: boolean) => {
              return new TransferActions.SubmitTransactionSuccess(isSuccess);
            }),
            catchError(error => of(new TransferActions.SubmitTransactionFail("error occured while submitting transactions")))
          )
      )
    );

    @Effect()
    submitTransactionSuccess$ = this._actions$.pipe(
      ofType(TransferActionTypes.SubmitTransactionSuccess),
      mergeMap((action: TransferActions.SubmitTransactionSuccess) => {
        if(action.payload) {
          return of(new TransferActions.GetTransactions());
        } else {
          of(new TransferActions.SubmitTransactionFail("error occured while submitting transactions"))
        }
      })
    );
}