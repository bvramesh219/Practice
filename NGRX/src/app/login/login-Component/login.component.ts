import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Agent } from '../agent';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title:string = "App Login";
  @Input() version:string;
  
  @Output() performLogin:EventEmitter<Agent> = new EventEmitter<Agent>();

  private _agent:Agent;
  get agent():Agent {
    return this._agent;
  }

  set agent(val:Agent) {
    this._agent = val;
  }

  constructor(){
    this.agent= {
      sineNum:null,
      agentSine:"",
      dutyCode:"",
      aaa:"",
      employeeId:""
    }
   }



  loginClick():void {
   debugger;
    //this.defaultMode = value;
    this.performLogin.emit(this.agent);
  }


}

