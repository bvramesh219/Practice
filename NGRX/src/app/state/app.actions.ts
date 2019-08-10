import { Action } from '@ngrx/store';
import { Agent } from '../login/agent';
import { LoginInfo } from './app.reducer';

export enum AppActionTypes {
    ToggleDisplayMode ='[App] Toggle Display Mode',
    Login = '[App]Login',
    LoginSuccess = '[App]Login Success',
    LoginFail = '[App]Login Fail'
}

export class ToggleDisplayMode implements Action {
    readonly type = AppActionTypes.ToggleDisplayMode;

    constructor(public payload:boolean) {}
}

export class Login implements Action {
    readonly type = AppActionTypes.Login;

    constructor(public payload:Agent) {}
}

export class LoginSuccess implements Action {
    readonly type = AppActionTypes.LoginSuccess;

    constructor(public payload:LoginInfo) {}
}

export class LoginFail implements Action {
    readonly type = AppActionTypes.LoginFail;
}

export type AppActions = ToggleDisplayMode | Login | LoginSuccess | LoginFail;