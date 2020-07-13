import { user } from '@backbase/models';
import { TransferActions, TransferActionTypes } from './transfer.actions';

export interface TransferState {
  loggedInUser: user
}

export const transferInitialState: TransferState = {
    loggedInUser: null
}

export function transferReducer(
    state = transferInitialState,
    action: TransferActions
  ): TransferState {
    switch (action.type) {
      case TransferActionTypes.GetLoggedUserSuccess: {
          return { ...state, loggedInUser: action.payload };
      }
    }
    return state;
}
