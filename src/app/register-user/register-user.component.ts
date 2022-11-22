import { Component, OnInit } from '@angular/core';
import { loginService } from '../login-page.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  fn: string;
  ln: string;
  username: string;
  dob: Date;
  age: number;
  td:Date = new Date();
  constructor(public addserv: loginService) {}

  ngOnInit() {}
  getUsername() {
    this.username = this.addserv.fullName(this.fn, this.ln);
  }
  // getAge(){
  //   this.age = this.addserv.getage(this.td, this.dob);
  // }
}
