import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authStatus: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      this.authStatus = undefined;
    }

  ngOnInit(): void {
    this.authService.updateAuthStatus(false);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const { value: { username, password } } = this.loginForm;
    this.authStatus = this.authService.checkLogin(username, password);
    if (this.authStatus) {
      this.router.navigate(['/products']);
    }
  }

}
