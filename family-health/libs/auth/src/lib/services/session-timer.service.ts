import { Injectable } from '@angular/core';
import {AppConstants} from '@family-health-constants'
import { Subscription, Observable, interval, Subject } from 'rxjs';

  providedIn: 'root'
})
export class SessionTimerService {
  private readonly _timeoutSeconds: number;
  private _count: number;
  private _timerSubscription: Subscription;
  private _timer$: Observable<number> = interval(1000);
  private _remainSeconds = new Subject<number>();

  remainSeconds$ = this._remainSeconds.asObservable();

  constructor() {
    this._timeoutSeconds = AppConstants.sessionTimeoutInSecond;
  }

  startTimer() {
    this.stopTimer();
    this._count = this._timeoutSeconds;
    this._timerSubscription = this._timer$.subscribe(n => {
      if (this._count > 0) {
        this._count--;
        this._remainSeconds.next(this._count);
      }
    });
  }

  stopTimer() {
    if (!!this._timerSubscription) {
      this._timerSubscription.unsubscribe();
    }
  }

  resetTimer() {
    this.startTimer();
  }

}
