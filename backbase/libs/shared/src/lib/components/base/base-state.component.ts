import { Store, select, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BaseComponent } from './base.component';

export abstract class BaseStateComponent extends BaseComponent {
    constructor(protected _store: Store<any>) {
        super();
    }

    protected subscribeState(query: any, callback: ((n: any) => any) = null) : Observable<any> {
        const observable = this._store.pipe(select(query));

        if (!!callback) {
            this.subscribeTo(observable, callback);
        }

        return observable;
    }

    protected dispatchAction(action: Action) {
        this._store.dispatch(action);
    }
}