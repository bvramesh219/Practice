import { Component, OnInit } from '@angular/core';
import { User } from '@family-health/models';
import { BaseStateComponent, AppService, AuthService } from '@family-health/shared';
import { Store } from '@ngrx/store';
import { authQuery, SessionTimerService } from '@family-health/auth';
import { Subscription } from 'rxjs';
import { AppConstants } from '@family-health-constants'
import { MatDialog } from '@angular/material/dialog';
import { SessionTimerModelComponent } from '../../components/session-timer-model/session-timer-model.component';
import { StringUtility } from 'libs/shared/src/lib/utility/string-utility';

@Component({
  selector: 'fhm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseStateComponent  implements OnInit {
  user: User;

  private _sessionTimerSubscription: Subscription;
  private _timerEnabled: boolean = AppConstants.sessionTimeoutEnabled;
  private _openModal: boolean;
  private _openModalAt: number = AppConstants.sessionTimeoutAlertUserInSecond;
  private _dialogRef;

  constructor(
    private _authService: AuthService,
    store: Store<any>,
    appService: AppService,
    private _sessionTimerService: SessionTimerService,
    private _dialog: MatDialog
  ) {
    super(appService, store);
  }

  ngOnInit(): void {
    this.watchUser();
  }

  private watchUser() {
    this.subscribeState(authQuery.getUser, (user: User) => {
      this.user = user;
      if (user) {
        if (!this._sessionTimerSubscription && this._timerEnabled) {
          this._trackSessionTime();
        }
      }
    });
  }

  private  _trackSessionTime() {
    this._openModal = false;
    this._sessionTimerService.startTimer();
    this._sessionTimerSubscription = this._sessionTimerService.remainSeconds$.subscribe(
      t => {
        if (t <= this._openModalAt && !this._openModal) {
          this._openModal = true;
          this._dialogRef = this._dialog.open(SessionTimerModelComponent, {
            disableClose: true,
            hasBackdrop: true
          });

          this._dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this._openModal = false;
              this.refreshSession();
            }
            else {
              this.cleanUpSession(false);
            }
          });
        }

        if (t === 0) { this.cleanUpSession(true); }
      }
    );
  }

  cleanUpSession(sessionTimeout: boolean) {
    this._openModal = false;
    if (!!this._dialogRef) { this._dialogRef.close(); }
    this._dialog.closeAll();

    this._sessionTimerService.stopTimer();

    if (!!this._sessionTimerSubscription) {
      this._sessionTimerSubscription.unsubscribe();
      this._sessionTimerSubscription = null;
    }

    this.logout(sessionTimeout);
  }

  logout(sessionTimeout: boolean) {
    //this._store.dispatch(new Logout(sessionTimeout));
  }

  refreshSession() {
    this._sessionTimerService.resetTimer();

    const authToken = this._authService.AuthToken;
    if (!StringUtility.isNullOrWhiteSpace(authToken)) {
      //this._store.dispatch(new GetUser(authToken));
    }
  }

}
