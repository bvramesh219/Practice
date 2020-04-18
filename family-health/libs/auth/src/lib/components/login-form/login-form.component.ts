import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOut } from '@family-health/animations';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { LoginModel } from '@family-health/models';

@Component({
  selector: 'fhm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [ fadeInOut ]
})
export class LoginFormComponent implements OnInit {
  @Input() loadingStatus: boolean;

  @Output() loginFormComponentSubmit = new EventEmitter<LoginModel>();

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
    if (!this.loginForm.valid){
      this.loginForm.get('password').markAsTouched();
      this.loginForm.get('username').markAsTouched();

      return;
    }
    const username = this.loginForm.value.username;
    this.loginFormComponentSubmit.emit({
      username: !!username ? username.trim() : username,
      password: this.loginForm.value.password
    } as LoginModel);
    return;
  }

}
