import { AppActions } from './app.actions';

export interface AppState {
  data: string
}

export const appBaseInitialState: AppState = {
    data: null
}

export function appReducer(
    state = appBaseInitialState,
    action: AppActions
  ): AppState {
    return state;
}
