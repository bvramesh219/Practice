import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthData } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthData>('auth');
export const getLoadingStatus = createSelector(getAuthState, state => !!state && state.loading);

export const authQuery = {
    getLoadingStatus
}