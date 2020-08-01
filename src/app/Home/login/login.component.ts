import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from "../../Models/Class/student";
import { User } from "../../Models/Class/user";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../Models/Service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  @Output('userLogin') user = new EventEmitter<User>();
  hideInvalidErrorMessage: boolean = true;

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  emailExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  initFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailExp)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
  }

  constructor(private service: UserService, private router:Router) {
    this.service = new UserService();
    this.initFormControls();
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    this.hideInvalidErrorMessage = true;
    if (this.service.login(new User(this.email.value, this.password.value))) {
      this.hideInvalidErrorMessage = true;
      this.router.navigate(['students']);
    }
    else 
      this.hideInvalidErrorMessage = false;
  }
}
