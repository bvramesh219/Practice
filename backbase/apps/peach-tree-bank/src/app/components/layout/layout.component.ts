import { Component, OnInit } from '@angular/core';
import { BaseStateComponent } from '@backbase/shared';
import { Store } from '@ngrx/store';
import { AppState } from '../../+state/app.reducer';

@Component({
  selector: 'bb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseStateComponent implements OnInit {

  constructor(
    store: Store<AppState>) {
      super(store);
  }

  ngOnInit(): void {
  }

}
