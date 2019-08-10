import { AppActions, AppActionTypes } from './app.actions';
import { Agent } from '../login/agent';

export interface LoginInfo {
    loggedinAgent:Agent,
    hasLoggedin:boolean
 }

export interface AppState {
    showDefaultMode: boolean
    loginInfo: LoginInfo
}

const initialAppState: AppState = {
    showDefaultMode: false,
    loginInfo:null
}

export function reducer(state = initialAppState, action:AppActions): AppState {
    let newState: AppState;
    switch(action.type) {
    case AppActionTypes.ToggleDisplayMode:
        newState = {
            ...state,
            showDefaultMode: action.payload
        }
        break;

    case AppActionTypes.LoginSuccess:
        newState = {
            ...state,
            loginInfo: action.payload
        }
        break;

    case AppActionTypes.LoginFail:
        newState = {
            ...state,
            loginInfo: {
                loggedinAgent:null,
                hasLoggedin: false
            }
        }
        break;
            
    default:
        newState = {...state};
    }
    return newState;
}