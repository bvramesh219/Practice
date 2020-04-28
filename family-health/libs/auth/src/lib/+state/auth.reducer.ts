import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from 'libs/models/auth/user';

export interface AuthData {
    loading: boolean;
    user: User;
    isLoggedIn: boolean;
    error: string;
    success: string;
}
/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
    readonly auth: AuthData;
}

export const initialState: AuthData = {
    loading: false,
    user: null,
    isLoggedIn: false,
    error: '',
    success: ''
}

export function authReducer(
    state = initialState,
    action: AuthActions
  ): AuthData {
    switch (action.type) {
        case AuthActionTypes.LoadingDone: {
            return { ...state, loading: false, isLoggedIn: false };
        }
        case AuthActionTypes.Login: {
            return { ...state, loading: true, success: '', error: '', isLoggedIn: false };
        }
        case AuthActionTypes.LoginFail: {
            return { ...state, loading: false, user: null, error: action.payload, isLoggedIn: false };
        }
        case AuthActionTypes.LoginSuccess: {
            return { ...state, loading: false, user: null, error: '', isLoggedIn: true };
        }
        default: {
            return state;
        }
    }
}