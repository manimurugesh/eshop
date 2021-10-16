import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.updateAuthStatus(false);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      updateOn: 'blur'
    });
  }

  getControlValidation(key: string): boolean {
    const { invalid, touched, dirty } = this.registerForm.get(key);
    return invalid && (dirty || touched);
  }

  submitRegistration(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const { value } = this.registerForm;
    this.authService.register(value);
    this.router.navigate(['products']);
  }

}
