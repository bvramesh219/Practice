import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TransferState } from './transfer.reducer';

export const getTransferState = createFeatureSelector<TransferState>('transfer');
export const getLoggedUser = createSelector(getTransferState, state => state.loggedInUser);
export const getLoggedUserRecipents = createSelector(getTransferState, state => state.recipents);

export const TRANSFER_QUERY = {
    getLoggedUser,
    getLoggedUserRecipents
}