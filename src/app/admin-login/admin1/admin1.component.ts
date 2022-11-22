import { Component, Input, OnInit } from '@angular/core';
import { loginService } from '../../login-page.service';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css'],
})
export class Admin1Component implements OnInit {

  adminDet: { id: string; designation: string; descripcion: string }[] = [];
  constructor(public addserv: loginService) {}

  ngOnInit() {
    this.adminDet = this.addserv.adminDetails;
  }
}
