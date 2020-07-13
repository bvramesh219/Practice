import { Action } from '@ngrx/store';
import { user } from '@backbase/models';

export enum AppActionTypes {
    GetInitialData = '[App] Get Initial Data'
}
export class GetInitialData implements Action {
    readonly type = AppActionTypes.GetInitialData;
}

export type AppActions =
GetInitialData 