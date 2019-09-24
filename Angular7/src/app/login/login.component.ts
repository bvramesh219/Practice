import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from '../services/common-data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'compass-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Compass Login';
  version = 'R5.1';
  constructor(private router: Router,
              private commonData: CommonDataService) {
              }

  ngOnInit() {
  }

  loginClick(): void {
    this.commonData.authenticateUser();
    this.router.navigate(['/globalNav']);
  }

}
