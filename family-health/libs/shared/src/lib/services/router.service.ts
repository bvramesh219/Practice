import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _router: Router;

  constructor() { }

  navigateUrl(url) {
    this._router.navigateByUrl(url);
  }
}

export interface RouteParams {
  [key: string]: any;
}

export interface RouteInfo {
  path: string;
  params?: RouteParams; //optional params that can be set when navigating to a route
  relativePath?: string | RouteInfo | RouteInfo[]; //param key to maintain any keys before this route (ie: userId)
}
