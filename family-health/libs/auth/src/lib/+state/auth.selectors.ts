import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthData } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthData>('auth');
export const getIsLoggedIn = createSelector(getAuthState, state => !!state.isLoggedIn);
export const getLoadingStatus = createSelector(getAuthState, state => !!state && state.loading);
export const getUser = createSelector(getAuthState, state => !!state ? state.user : null);

export const authQuery = {
    getIsLoggedIn,
    getLoadingStatus,
    getUser
}