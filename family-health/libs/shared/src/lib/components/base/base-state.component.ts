import { BaseComponent } from './base.component';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Store, select } from '@ngrx/store';


export abstract class BaseStateComponent extends BaseComponent {

    constructor(_appService: AppService, protected _store: Store<any>) {
        super(_appService);
    }

    protected subscribeState(query: any, callback: ((n: any) => any) = null) : Observable<any> {
        const observable = this._store.pipe(select(query));

        if (!!callback) {
            this.subscribeTo(observable, callback);
        }

        return observable;
    }

    
}