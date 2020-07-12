import { user } from '@backbase/models';
import { AppBaseActions } from './app.actions';

export interface AppBaseData {
  loggedInUser: user
}

export const appBaseInitialState: AppBaseData = {
    loggedInUser: null
}

export function appReducer(
    state = appBaseInitialState,
    action: AppBaseActions
  ): AppBaseData {
    return state;
}
