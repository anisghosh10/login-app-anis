import { Component, OnInit } from '@angular/core';
import { loginService } from '../../login-page.service';

@Component({
  selector: 'app-admin3',
  templateUrl: './admin3.component.html',
  styleUrls: ['./admin3.component.css']
})
export class Admin3Component implements OnInit {

  adminDet: { id: string; designation: string; descripcion: string }[] = [];
  constructor(public addserv: loginService) {}

  ngOnInit() {
    this.adminDet = this.addserv.adminDetails;
  }
}