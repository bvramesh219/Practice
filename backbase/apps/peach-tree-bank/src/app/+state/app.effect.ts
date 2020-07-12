import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as appActions from './app.actions';
import { AppBaseActionTypes } from './app.actions';
import { UserService } from '@backbase/shared';


@Injectable()
export class AuthEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService
        ) {

    }

   /* @Effect()
    login$ = this._actions$.pipe(
      ofType(AuthActionTypes.Login),
      mergeMap((action: authActions.Login) =>
        this._userService.login(action.payload)
          .pipe(
            map((userAuthenticationModel: UserAuthenticationModel) => {
              const userModel = userAuthenticationModel.userModel;
              const authenticationModel = userAuthenticationModel.authenticationModel;

            if (userModel != null && userModel.token) {
              return new authActions.LoggedIn(userModel);
            }
            else {
              return new authActions.LoginFail(authenticationModel.errorMessage);
            }
            }),
            catchError(error => of(new authActions.LoginFail('Sorry, the log-in failed. Please try again.')))
          )
      )
    );*/
}