import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '@family-health/animations';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'fhm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [ fadeInOut ]
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
