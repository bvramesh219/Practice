import { Action } from '@ngrx/store';
import { User, Account, Transaction, TransactionRequest } from '@backbase/models';

export enum TransferActionTypes {
    GetLoggedUser = '[Transfer] Get Logged User',
    GetLoggedUserSuccess = '[Transfer] Get Logged User Success',
    GetLoggedUserFail = '[Transfer] Get Logged User Fail',

    GetUserRecipents = '[Transfer] Get User Recipents',
    GetUserRecipentsSuccess = '[Transfer] Get User Recipents Success',
    GetUserRecipentsFail = '[Transfer] Get User Recipents Fail',

    GetTransactions = '[Transfer] Get Transactions',
    GetTransactionsSuccess = '[Transfer] Get Transactions Sucess',
    GetTransactionsFail = '[Transfer] Get Transactions Fail',

    SubmitTransaction = '[Transfer] Submit Transaction',
    SubmitTransactionSuccess = '[Transfer] Submit Transactions Sucess',
    SubmitTransactionFail = '[Transfer] Submit Transactions Fail',
}
export class GetLoggedUser implements Action {
    readonly type = TransferActionTypes.GetLoggedUser;
}
export class GetLoggedUserSuccess implements Action {
    readonly type = TransferActionTypes.GetLoggedUserSuccess;
    constructor(public payload: User) {}
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
    constructor(public payload: Account[]) {}
}
export class GetUserRecipentsFail implements Action {
    readonly type = TransferActionTypes.GetUserRecipentsFail;
    constructor(public payload: any) {}
}

export class GetTransactions implements Action {
    readonly type = TransferActionTypes.GetTransactions;
}
export class GetTransactionsSuccess implements Action {
    readonly type = TransferActionTypes.GetTransactionsSuccess;
    constructor(public payload: Transaction[]) {}
}
export class GetTransactionsFail implements Action {
    readonly type = TransferActionTypes.GetTransactionsFail;
    constructor(public payload: any) {}
}

export class SubmitTransaction implements Action {
    readonly type = TransferActionTypes.SubmitTransaction;
    constructor(public payload: TransactionRequest) {}
}
export class SubmitTransactionSuccess implements Action {
    readonly type = TransferActionTypes.SubmitTransactionSuccess;
    constructor(public payload: boolean) {}
}
export class SubmitTransactionFail implements Action {
    readonly type = TransferActionTypes.SubmitTransactionFail;
    constructor(public payload: any) {}
}

export type TransferActions =
GetLoggedUser | GetLoggedUserSuccess | GetLoggedUserFail |
GetUserRecipents | GetUserRecipentsSuccess | GetUserRecipentsFail |
GetTransactions | GetTransactionsSuccess | GetTransactionsFail |
SubmitTransaction | SubmitTransactionSuccess | SubmitTransactionFail