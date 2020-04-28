import { Injectable } from '@angular/core';
import { CacheUtility } from '../utility/cache.utility';
import { User } from '@family-health/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _toggleState: boolean;

  constructor() { }

  get AuthToken(): string {
    const authToken = localStorage.getItem(CacheUtility.getEncryptedString('ApiToken'));
    return authToken;
  }

  set AuthToken(authToken: string) {
    if (!!authToken) {
      localStorage.setItem(CacheUtility.getEncryptedString('ApiToken'), authToken);
    }
  }

  get AuthenticatedUser(): User {
    const authToken = window.localStorage.getItem(CacheUtility.getEncryptedString('user'));
    return JSON.parse(authToken);
  }

  set AuthenticatedUser(user: User) {
    window.localStorage.setItem(CacheUtility.getEncryptedString('user'), JSON.stringify(user));
  }

  get ToggleState(): boolean {
    return this._toggleState;
  }

  set ToggleState(state: boolean) {
    this._toggleState = state;
  }
}
