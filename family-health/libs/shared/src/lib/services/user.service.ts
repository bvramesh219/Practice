import { Injectable } from '@angular/core';
import { LoginModel, UserAuthenticationModel } from '@family-health/models';
import { Observable, of } from 'rxjs';
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
    const userAuthModel: UserAuthenticationModel = {
      userModel : {
        id: '5095bdc7-e025-4b97-a448-bc49f2e8b442',
        name: 'Ramesh Babu',
        token :'k79Qh33qbas7zt3oRIuKZuhgBdYqPBiVhD012MQbv63wIo3MJVXgBkNO1PqalLX4kIWbOI2lp094YO2tI9AQGsCr4m7fNaHhU89aWcMK2pcJhFc94yzti/Tq1+qTkfSO',
        username: 'bvrameshbabu@gmail.com',
        accountNumber: '1212jasif7ajey'
      },
      authenticationModel: null
    }

    return of(userAuthModel);
    //return this.post<UserAuthenticationModel>(`/authenticate`, loginModel);
  }
}
