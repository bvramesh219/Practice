import { Action } from '@ngrx/store';

export enum AppActionTypes {
    GetInitialData = '[App] Get Initial Data'
}
export class GetInitialData implements Action {
    readonly type = AppActionTypes.GetInitialData;
}

export type AppActions =
GetInitialData 