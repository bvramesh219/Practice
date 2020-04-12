import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor() { }
}

export interface RouteParams {
  [key: string]: any;
}

export interface RouteInfo {
  path: string;
  params?: RouteParams; //optional params that can be set when navigating to a route
  relativePath?: string | RouteInfo | RouteInfo[]; //param key to maintain any keys before this route (ie: userId)
}
