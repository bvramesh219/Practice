import { Component, OnInit } from '@angular/core';
import { SessionTimerService } from '@family-health/auth';

@Component({
  selector: 'fhm-session-timer-model',
  templateUrl: './session-timer-model.component.html',
  styleUrls: ['./session-timer-model.component.scss']
})
export class SessionTimerModelComponent implements OnInit {

  constructor(public sessionTimerService: SessionTimerService) { }

  ngOnInit(): void {
  }

}
