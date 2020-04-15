import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseStateComponent, AppService } from '@family-health/shared';
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import { authQuery } from '../../+state/auth.selectors';

@Component({
  selector: 'fhm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseStateComponent implements OnInit {
  loadingStatus$: Observable<boolean>;

  constructor(appService: AppService,
    store: Store<AuthState>,) {
      super(appService, store);
  }

  ngOnInit(): void {
    this.loadingStatus$ = this.subscribeState(authQuery.getLoadingStatus);
  }

}
