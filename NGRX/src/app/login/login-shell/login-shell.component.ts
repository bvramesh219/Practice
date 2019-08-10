import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State, getShowDefaultMode, LoginInfo, getLoggedInStatus, ToggleDisplayMode, Login} from '../../state'
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Agent } from '../agent';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.css']
})

export class LoginShellComponent implements OnInit {
  defaultMode:boolean = true;
  isActive:boolean = true;
  appVersion:string = "5.2";
  agenInfo:LoginInfo=null;
  hasLoggedIn$: Observable<boolean>;
  agent:Agent;

  constructor(private store:Store<State>) { 
    
  }

  ngOnInit():void {
    let appStateObservable: Observable<boolean> = this.store.pipe(
      select(getShowDefaultMode),
      takeWhile(()=>this.isActive));

    appStateObservable.subscribe(
      showDefaultMode => this.defaultMode= showDefaultMode
    );

    this.hasLoggedIn$= this.store.pipe(select(getLoggedInStatus));
    this.hasLoggedIn$.pipe(takeWhile(() => this.isActive)).subscribe(
      (getLoggedInStatus) => {
        debugger;
        this.agenInfo = {loggedinAgent:this.agent,hasLoggedin:getLoggedInStatus}
        //this.agentLoginStatusChanged.emit();
      }
    );
  }

  checkChanged(value:boolean):void {
     //this.defaultMode = value;
     let action:ToggleDisplayMode = new ToggleDisplayMode(value);
     this.store.dispatch(action);
  }

  toggleAgentLoginStatus(agentInfo:LoginInfo):void {
    this.agenInfo = agentInfo;
  }

  doLogin(agent:Agent){
    this.agent=agent;
    let action:Login = new Login(agent);
    this.store.dispatch(action);
  }

  ngOnDestroy():void{
    this.isActive = false;
  }

}
