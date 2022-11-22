import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    localStorage.setItem('Key', 'Admin must login via VPN!');
  }
  ngOnDestroy() {
    localStorage.removeItem('Key');
  }
}