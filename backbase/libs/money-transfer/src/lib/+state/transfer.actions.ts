import { Action } from '@ngrx/store';
import { user, account } from '@backbase/models';

export enum TransferActionTypes {
    GetLoggedUser = '[Transfer] Get Logged User',
    GetLoggedUserSuccess = '[Transfer] Get Logged User Success',
    GetLoggedUserFail = '[Transfer] Get Logged User Fail',
    GetUserRecipents = '[Transfer] Get User Recipents',
    GetUserRecipentsSuccess = '[Transfer] Get User Recipents Success',
    GetUserRecipentsFail = '[Transfer] Get User Recipents Fail'
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

export class GetUserRecipents implements Action {
    readonly type = TransferActionTypes.GetUserRecipents;
    constructor(public payload: number) {}
}
export class GetUserRecipentsSuccess implements Action {
    readonly type = TransferActionTypes.GetUserRecipentsSuccess;
    constructor(public payload: account[]) {}
}
export class GetUserRecipentsFail implements Action {
    readonly type = TransferActionTypes.GetUserRecipentsFail;
    constructor(public payload: any) {}
}


export type TransferActions =
GetLoggedUser | GetLoggedUserSuccess | GetLoggedUserFail |
GetUserRecipents | GetUserRecipentsSuccess | GetUserRecipentsFail