import { User, Account, Transaction } from '@backbase/models';
import { TransferActions, TransferActionTypes } from './transfer.actions';

export interface TransferState {
  loggedInUser: User,
  recipents: Account[],
  transactions: Transaction[]
}

export const transferInitialState: TransferState = {
    loggedInUser: null,
    recipents: [],
    transactions: []
}

export function transferReducer(
    state = transferInitialState,
    action: TransferActions
  ): TransferState {
    switch (action.type) {
      case TransferActionTypes.GetLoggedUserSuccess: {
          return { ...state, loggedInUser: action.payload };
      }
      case TransferActionTypes.GetUserRecipentsSuccess: {
        return { ...state, recipents: action.payload };
      }
      case TransferActionTypes.GetTransactionsSuccess: {
        return { ...state, transactions: action.payload };
      }
    }
    return state;
}
