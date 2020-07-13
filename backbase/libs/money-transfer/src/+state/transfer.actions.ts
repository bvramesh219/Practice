import { Action } from '@ngrx/store';
import { user } from '@backbase/models';

export enum TransferActionTypes {
    GetLoggedUser = '[Transfer] Get Logged User',
    GetLoggedUserSuccess = '[Transfer] Get Logged User Success',
    GetLoggedUserFail = '[Transfer] Get Logged User Fail',
}
export class GetLoggedUser implements Action {
    readonly type = TransferActionTypes.GetLoggedUser;
}
export class GetLoggedUserSuccess implements Action {
    readonly type = TransferActionTypes.GetLoggedUserSuccess;
    constructor(public payload: user) {}
}
export class GetLoggedUserFail implements Action {
    readonly type = TransferActionTypes.GetLoggedUserFail;
    constructor(public payload: any) {}
}


export type TransferActions =
GetLoggedUser | GetLoggedUserSuccess |GetLoggedUserFail