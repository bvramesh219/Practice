import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

const GetAppState = createFeatureSelector<AppState>('app');

export const getShowDefaultMode = createSelector(
    GetAppState,
    state =>state.showDefaultMode
);

export const getLoggedInStatus = createSelector(
    GetAppState,
    state =>!!(state.loginInfo && state.loginInfo.hasLoggedin)
);

export {LoginInfo, reducer} from './app.reducer';
export *  from './app.actions';
export { LoginEffects } from './app.effects';
export {State} from './app.state';