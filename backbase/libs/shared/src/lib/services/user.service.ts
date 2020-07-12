import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(
    apiService: ApiService
  ) {
    super(apiService, 'user');
  }
}
