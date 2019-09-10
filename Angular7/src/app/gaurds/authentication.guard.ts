import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonDataService } from '../services/common-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements  CanActivate {

  constructor(private commonData: CommonDataService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.commonData.isAuthenticated;
  }
}
