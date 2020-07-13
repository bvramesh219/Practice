import { User, Account } from '@backbase/models';
import { TransferActions, TransferActionTypes } from './transfer.actions';

export interface TransferState {
  loggedInUser: User,
  recipents: Account[]
}

export const transferInitialState: TransferState = {
    loggedInUser: null,
    recipents: []
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
    }
    return state;
}
