import { Injectable } from '@angular/core';

@Injectable()
export class loginService {
  constructor() {}
  //Not user right now
  fullName(fn: string, ln: string) {
    return fn + ln;
  }
  //For Feedback Page
  feedbackArray = [];
  //For Reguster User Page
  userData = [];
  //For Admin Sub Pages (Admin1,2,3)
  adminDetails = [
    {
      id: 'Admin 1',
      designation: 'Engineer 1',
      descripcion: 'Some description about Admin 1',
    },
    {
      id: 'Admin 2',
      designation: 'Engineer 2',
      descripcion: 'Some description about Admin 2',
    },
    {
      id: 'Admin 3',
      designation: 'Senior Engineer',
      descripcion: 'Some description anout Admin 3',
    },
  ];
}
