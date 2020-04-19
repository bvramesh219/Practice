import { Injectable } from '@angular/core';
import { LoginModel, UserAuthenticationModel } from '@family-health/models';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends BaseService {

  constructor(
    apiService: ApiService
  ) {
    super(apiService, 'user');
  }

  login(loginModel: LoginModel): Observable<UserAuthenticationModel> {
    debugger;
    return this.post<UserAuthenticationModel>(`/authenticate`, loginModel);
  }
}
