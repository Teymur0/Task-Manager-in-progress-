import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AuthenticationResponseData,
  AuthenticationService,
} from './authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authenticationObs: Observable<AuthenticationResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authenticationObs = this.authenticationService.login(email, password);
    } else {
      authenticationObs = this.authenticationService.singUp(email, password);
    }

    authenticationObs.subscribe(
      (resData) => {
        // console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/tasks']);
      },
      (errorMessage) => {
        // console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }
}
