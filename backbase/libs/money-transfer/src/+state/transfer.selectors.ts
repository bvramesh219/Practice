import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TransferState } from './transfer.reducer';

export const getTransferState = createFeatureSelector<TransferState>('transfer');
export const getLoggedUser = createSelector(getTransferState, state => !!state.loggedInUser);

export const TRANSFER_QUERY = {
    getLoggedUser
}