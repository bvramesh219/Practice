import { AppBaseActions } from './app.actions';
import { MetaReducer, ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouter from '@ngrx/router-store';
import { AuthActionTypes } from '@family-health/auth';

export interface AppBaseData {
    IsSideNavVisible: boolean;
}

export const appBaseInitialState: AppBaseData = {
    IsSideNavVisible: true
}

export const rootInitialState = {
    router: {
      state: {
        url: '/',
        params: {},
        queryParams: {}
      },
      navigationId: 0
    },
  };

  export const appReducer = {
    router: fromRouter.routerReducer, // ActionReducerMap<AppRouterState>
    base: appBaseReducer
  };

export function appBaseReducer(
    state = appBaseInitialState,
    action: AppBaseActions
  ): AppBaseData {
    return state;
}

export function resetStateOnLogout(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === AuthActionTypes.Logout) {
      return reducer(rootInitialState, action);
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [resetStateOnLogout, storeFreeze];