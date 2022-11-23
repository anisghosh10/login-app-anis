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
  flag: boolean;
  flag1: boolean;
  flagH: boolean;
  flagPasswordMismatch: boolean;
  add(param) {
    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].username === this.form.value.username) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
    for (var j = 0; j < this.userList.length; j++) {
      if (
        this.userList[j].username === this.form.value.username &&
        this.userList[j].password === this.form.value.password
      ) {
        this.flag1 = false;
      } else {
        this.flag1 = true;
      }
    }
    if (!this.flag) {
      this.flagH = false;
    } else if (this.userList.length == 0) {
      this.flagH = false;
    } else {
      this.flagH = true;
    }
    if (!this.flag1) {
      this.flagPasswordMismatch = false;
    } else {
      this.flagPasswordMismatch = true;
    }
  }
}
