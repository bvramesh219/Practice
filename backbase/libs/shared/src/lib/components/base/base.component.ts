import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
    protected _subscriptions: Subscription[] = [];

    constructor() {
    }
    
    protected subscribeTo<T>(observable: Observable<T>, callback: (data: T) => void) {
        return this.subscribe(observable.subscribe(callback));
      }
  
      protected subscribe(subscription: Subscription) {
        this._subscriptions.push(subscription);
        return subscription;
      }

      protected unsubscribeAll() {
        this._subscriptions.forEach(s => s.unsubscribe());
        this._subscriptions = [];
    }
      
    ngOnDestroy() {
        this.unsubscribeAll();
    }
}