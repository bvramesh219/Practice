import { AuthActions } from './auth.actions';

export interface AuthData {
    loading: boolean;
}
/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
    readonly auth: AuthData;
}

export const initialState: AuthData = {
    loading: false
}

export function authReducer(
    state = initialState,
    action: AuthActions
  ): AuthData {
    switch (action.type) {
        default: {
            return state;
        }
    }
}