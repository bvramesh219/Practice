import { Action } from '@ngrx/store';
import { LoginModel } from '@family-health/models';

export enum AuthActionTypes {
    LoadingDone = '[Auth API] Loading Done',
    Login = '[Auth Page] Login',
    Logout = '[TopNav] Logout'
}

export class LoadingDone implements Action {
    readonly type = AuthActionTypes.LoadingDone;
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;
    constructor(public payload: LoginModel) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
    constructor(public sessionTimeout?: boolean) { }
}

export type AuthActions =
  LoadingDone
  | Login
  | Logout;