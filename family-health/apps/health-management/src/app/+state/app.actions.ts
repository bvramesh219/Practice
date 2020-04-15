import { Action } from '@ngrx/store';

export enum AppBaseActionTypes {
    OpenSideNav = '[App] Open SideNav',
}
export class OpenSideNav implements Action {
    readonly type = AppBaseActionTypes.OpenSideNav;
    constructor() {}
}

export type AppBaseActions =
  OpenSideNav