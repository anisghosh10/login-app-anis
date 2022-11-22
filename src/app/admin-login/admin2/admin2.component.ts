import { Component, OnInit } from '@angular/core';
import { loginService } from '../../login-page.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {
  adminDet: { id: string; designation: string; descripcion: string }[] = [];
  constructor(public addserv: loginService) {}

  ngOnInit() {
    this.adminDet = this.addserv.adminDetails;
  }

}