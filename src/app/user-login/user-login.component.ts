import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../login-page.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  form: FormGroup;

  userList = [];
  constructor(public addserv: loginService) {}

  ngOnInit() {
    this.userList = this.addserv.userData;

    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  add(param) {
    const userObject = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.userList.push(userObject);
  }
}
