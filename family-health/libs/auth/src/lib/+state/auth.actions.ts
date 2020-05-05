import { Action } from '@ngrx/store';
import { LoginModel, User } from '@family-health/models';

export enum AuthActionTypes {
    LoadingDone = '[Auth API] Loading Done',
    Login = '[Auth Page] Login',
    LoggedIn = '[Auth API] Logged In',
    LoginSuccess = '[Auth API] Login Success',
    LoginFail = '[Auth API] Login Fail',
    LoadCustomerApplication = '[Auth API] Load Customer Application',
    Logout = '[TopNav] Logout',
    GetUser = '[App Component] Get User Object'
}

export class LoadingDone implements Action {
    readonly type = AuthActionTypes.LoadingDone;
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;
    constructor(public payload: LoginModel) { }
}

export class LoggedIn implements Action {
    readonly type = AuthActionTypes.LoggedIn;
    constructor(public payload: User) { }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;
    constructor(public payload: User) { }
}

export class LoginFail implements Action {
    readonly type = AuthActionTypes.LoginFail;
    constructor(public payload: string) { }
}

export class LoadCustomerApplication implements Action {
    readonly type = AuthActionTypes.LoadCustomerApplication;
    constructor(public user: User) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
    constructor(public sessionTimeout?: boolean) { }
}

export class GetUser implements Action {
    readonly type = AuthActionTypes.GetUser;
    constructor(public token: string) { }
 }

export type AuthActions =
  LoadingDone
  | Login
  | LoggedIn
  | LoginSuccess
  | LoginFail
  | LoadCustomerApplication
  | Logout
  | GetUser;