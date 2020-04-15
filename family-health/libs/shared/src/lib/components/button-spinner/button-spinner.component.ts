import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fhm-button-spinner',
  templateUrl: './button-spinner.component.html',
  styleUrls: ['./button-spinner.component.scss']
})
export class ButtonSpinnerComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' = 'accent';

  constructor() { }

  ngOnInit(): void {
  }

}
