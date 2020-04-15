import { OnDestroy } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Subscription, Observable } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
    protected _subscriptions: Subscription[] = [];
    private _keySubscriptions: {[key: string]: Subscription[]} = {};

    constructor(protected _appService: AppService) {
        this.callOnDestroyEvenIfOverridden();
    }

    private callOnDestroyEvenIfOverridden() {
        const onDestroy = this.ngOnDestroy;

        this.ngOnDestroy = () => {
          this.unsubscribeAll();
          onDestroy.apply(this);
        };
    }

    protected unsubscribeAll() {
        this._subscriptions.forEach(s => s.unsubscribe());
        this._subscriptions = [];
        Object.keys(this._keySubscriptions).forEach(key => {
          this.unsubscribeKey(key);
        });
    }

    protected unsubscribeKey(key: string) {
        if (this._keySubscriptions[key]){
          this._keySubscriptions[key].forEach(s => s.unsubscribe());
          delete this._keySubscriptions[key];
        }
    }

    protected subscribeTo<T>(observable: Observable<T>, callback: (data: T) => void) {
      return this.subscribe(observable.subscribe(callback));
    }

    protected subscribe(subscription: Subscription) {
      this._subscriptions.push(subscription);
      return subscription;
    }

    ngOnDestroy() {}
}