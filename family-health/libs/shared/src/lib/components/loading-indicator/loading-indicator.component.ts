import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fhm-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() fullScreen: boolean = true;
  @Input() coverTopNav: boolean = false; //This is used in conjunction with fullScreen = true mode

  constructor() { }

  ngOnInit(): void {
  }

}
