import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as authActions from './auth.actions';
import { UserService, AuthService } from '@family-health/shared';
import { UserAuthenticationModel, UserRedirectAction } from '@family-health/models';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService,
        private _authService: AuthService
        ) {

    }

    @Effect()
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
    );

    @Effect()
    loggedIn = this._actions$.pipe(
      ofType(AuthActionTypes.LoggedIn),
      mergeMap((action: authActions.LoggedIn) => {
        this._authService.AuthToken = action.payload.token;
        this._authService.AuthenticatedUser = action.payload;
        this._authService.ToggleState = null;

        return [new authActions.LoginSuccess(action.payload)];
      })
    );
}