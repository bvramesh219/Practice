import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginServiceService } from '../login/login-service.service';
import * as AppActions  from "./app.actions";
import {mergeMap, map} from 'rxjs/operators';
import { LoginInfo } from './app.reducer';
import { Agent } from '../login/agent';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginEffects{

    constructor(private actions$:Actions, private loginService: LoginServiceService){
    }

    @Effect()
    loginAgent$ = this.actions$.pipe(
        ofType(AppActions.AppActionTypes.Login),
        mergeMap((action:AppActions.Login)=>this.loginService.performLogin(action.payload).pipe(
                map((loginObject:Object)=>{
                    if(loginObject["isErrorResponse"]) {
                        return new AppActions.LoginFail();
                    } else {
                      return  new AppActions.LoginSuccess({loggedinAgent:action.payload,hasLoggedin:true});
                    }
                })
            )
        )
    );

}