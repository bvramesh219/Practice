import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

/**
 * App Base Router Tracking
 * -----------------------------------------
 */
export interface RouterStateData {
  url: string;
  params: Params;
  queryParams: Params;
  data: {};
}

export type RouterState = fromRouter.RouterReducerState<RouterStateData>;