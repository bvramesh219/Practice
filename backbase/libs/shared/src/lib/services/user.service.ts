import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { ApiService } from './api.service';
import { user, account } from '@backbase/models';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(
    apiService: ApiService
  ) {
    super(apiService, 'user');
  }

  getLoginUser(): Observable<user> {
    return this.get<user>(`/login-user`);
  }
  
  getRecipents(userId: number): Observable<account[]> {
    return this.get<account[]>(`/recipents/${userId}`);
  }
}
