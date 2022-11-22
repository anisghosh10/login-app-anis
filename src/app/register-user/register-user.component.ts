import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../login-page.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  username:string;
  form: FormGroup
  constructor(public addserv: loginService) {}
  userList = [];
  ngOnInit() {
    this.userList = this.addserv.userData;

    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
    });
  }
  
  // getUsername() {
  //   this.username = this.addserv.fullName(this.form.value.firstName.toLowerCase(), this.form.value.lastName.toLowerCase);
  // }
  add(param) {
    const userObject = {
      firsName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      phone: this.form.value.phone,
      dob: this.form.value.dob,
      password: this.form.value.password,
      confirmpassword: this.form.value.confirmpassword,
      username: this.form.value.firstName.toLowerCase() + this.form.value.lastName.toLowerCase(),
    };
    this.userList.push(userObject);
    console.log(this.userList)
  }
}
