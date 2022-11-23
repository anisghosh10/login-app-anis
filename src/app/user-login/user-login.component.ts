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
  flagH: boolean;
  add(param) {
    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].username === this.form.value.username) {
        this.flag = false;
        break;
      } else {
        this.flag = true;
      }
    }
    if (!this.flag) {
      this.flagH = false;
    } else if (this.userList.length == 0) {
      this.flagH = false;
    } else {
      this.flagH = true;
    }
  }
}
