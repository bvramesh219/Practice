import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Agent } from './agent';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { 

  }

  performLogin(agent:Agent):Observable<Object> {
    const Url = "https://compassservices.ual.com/r5.0//AuthorizationServices/Api/Authorization/AuthenticationHostLogin";
    const body = {...agent,machinename:"wwhq9089"};
    return this.http.post(Url, body);
  }
}
