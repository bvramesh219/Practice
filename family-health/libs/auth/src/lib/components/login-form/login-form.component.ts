import { Component, OnInit, Input } from '@angular/core';
import { fadeInOut } from '@family-health/animations';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'fhm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [ fadeInOut ]
})
export class LoginFormComponent implements OnInit {
  @Input() loadingStatus: boolean;

  maskUserPassword = true;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  toggleUserPassword(value: boolean) {
    this.maskUserPassword = !this.maskUserPassword;
  }

  showLoginButtonAsDisabled(): boolean {
    return  false;
  }

  loginFormSubmit() {
    return;
  }

}
