import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LoadingDone = '[Auth API] Loading Done',
    Logout = '[TopNav] Logout'
}

export class LoadingDone implements Action {
    readonly type = AuthActionTypes.LoadingDone;
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
    constructor(public sessionTimeout?: boolean) { }
}

export type AuthActions =
  LoadingDone
  | Logout;