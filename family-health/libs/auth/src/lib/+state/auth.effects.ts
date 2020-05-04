import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import * as authActions from './auth.actions';
import { UserService, AuthService, RouterService } from '@family-health/shared';
import { UserAuthenticationModel, User } from '@family-health/models';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private _actions$: Actions,
        private _userService: UserService,
        private _authService: AuthService,
        private _routerService: RouterService
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

        return [new authActions.LoginSuccess(action.payload)];
      })
    );

    @Effect()
    redirectAfterLoginSuccess$ = this._actions$.pipe(
      ofType(AuthActionTypes.LoginSuccess),
      map((action: authActions.LoginSuccess) => {
        const userModel = action.payload;
        if (userModel != null && userModel.token) {
          // Code to Redirect logic based on different scenarios
        }
        return new authActions.LoadCustomerApplication(action.payload);
      })
    );

  /**
   * dispatch: false - router.navigate is not a return action so we set dispatch to false here
   * ofType - Effect will watch below Action
   * map - Set the http return as the action.payload (user object here)
   * tap - we then perform a side-effect such as redirect or logging
   */
  @Effect({ dispatch: false })
  navigateToWelcome$ = this._actions$.pipe(
    ofType(AuthActionTypes.LoadCustomerApplication),
    tap((action: authActions.LoadCustomerApplication) => {
      const user: User = action.user;
      this._authService.AuthToken = user.token;
      this._authService.AuthenticatedUser = user;
      this._authService.ToggleState = null;

      if (!!this._authService.redirect.url && (!this._authService.redirect.lastUser || this._authService.redirect.lastUser === action.user.username)) {
        this._authService.redirect.lastUser = user.username;
        this._routerService.navigateUrl(this._authService.redirect.url);
      } else {
        this._authService.redirect.url = null;
        this._authService.redirect.lastUser = user.username;
        const userLoginAccountNumber: string = user.accountNumber;
        // Navigation logic comes here
      }
    })
  );
}