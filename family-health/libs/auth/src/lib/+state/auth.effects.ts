import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as authActions from './auth.actions';
import { UserService } from '@family-health/shared';
import { UserAuthenticationModel, UserRedirectAction } from '@family-health/models';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService
        ) {

    }

    @Effect()
    login$ = this._actions$.pipe(
      ofType(AuthActionTypes.Login),
      mergeMap((action: authActions.Login) =>
        this._userService.login(action.payload)
          .pipe(
            map((userAuthenticationModel: UserAuthenticationModel) => {
              debugger;
              const userModel = userAuthenticationModel.userModel;
              const authenticationModel = userAuthenticationModel.authenticationModel;

            if (userModel != null && userModel.token && userModel.redirectAction === UserRedirectAction.TwoFactorSetup) {
              // Code for Two Factor Setup
            }
            else if (userModel != null && userModel.token) {
              return new authActions.LoggedIn(userModel);
            }
            else {
              return new authActions.LoginFail(authenticationModel.errorMessage);
            }
            }),
            catchError(error => of(new authActions.LoginFail('Sorry, the log-in failed. Please try again.')))
          )
      )
    );
}