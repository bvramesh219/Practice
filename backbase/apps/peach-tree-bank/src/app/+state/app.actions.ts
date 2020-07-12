import { Action } from '@ngrx/store';

export enum AppBaseActionTypes {
    GetLoggedUser = '[App] Get Logged User',
}
export class GetLoggedUser implements Action {
    readonly type = AppBaseActionTypes.GetLoggedUser;
    constructor() {}
}

export type AppBaseActions =
GetLoggedUser