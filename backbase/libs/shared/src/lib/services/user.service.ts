import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { ApiService } from './api.service';
import { User, Account, Transaction } from '@backbase/models';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(
    apiService: ApiService
  ) {
    super(apiService, 'user');
  }

  getLoginUser(): Observable<User> {
    return this.get<User>(`/login-user`);
  }
  
  getRecipents(userId: number): Observable<Account[]> {
    return this.get<Account[]>(`/recipents/${userId}`);
  }
}
