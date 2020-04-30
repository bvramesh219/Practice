import { Injectable } from '@angular/core';
import { CacheUtility } from '../utility/cache.utility';
import { User } from '@family-health/models';
import { AppConstants } from '@family-health-constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get AuthToken(): string {
    const authToken = localStorage.getItem(CacheUtility.getEncryptedString(AppConstants.ApiTokenKey));
    return authToken;
  }

  set AuthToken(authToken: string) {
    if (!!authToken) {
      localStorage.setItem(CacheUtility.getEncryptedString(AppConstants.ApiTokenKey), authToken);
    }
  }

  get AuthenticatedUser(): User {
    const authToken = window.localStorage.getItem(CacheUtility.getEncryptedString('user'));
    return JSON.parse(authToken);
  }

  set AuthenticatedUser(user: User) {
    window.localStorage.setItem(CacheUtility.getEncryptedString('user'), JSON.stringify(user));
  }
}
