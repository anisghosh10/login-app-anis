import { Component, OnInit } from '@angular/core';
import { loginService } from '../login-page.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'],
})
export class FeedbackListComponent implements OnInit {
  idValue = 0;

  feedbackList = [];
  constructor(public addserv: loginService) {}

  ngOnInit() {
    this.feedbackList = this.addserv.feedbackArray;
  }

  addItem(value: any) {
    this.idValue += 1;
    this.feedbackList.push(value);
  }

  delItem(value: any) {
    this.feedbackList.splice(this.feedbackList.indexOf(value), 1);
  }
}
