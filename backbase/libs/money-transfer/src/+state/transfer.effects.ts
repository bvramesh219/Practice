import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as TransferActions from './transfer.actions';
import { TransferActionTypes } from './transfer.actions';
import { UserService } from '@backbase/shared';
import { user } from '@backbase/models';


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
            map((loggedUser: user) => {
              return new TransferActions.GetLoggedUserSuccess(loggedUser);
            }),
            catchError(error => of(new TransferActions.GetLoggedUserFail("error occured")))
          )
      )
    );
}