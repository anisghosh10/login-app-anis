import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-display',
  templateUrl: './feedback-display.component.html',
  styleUrls: ['./feedback-display.component.css']
})
export class FeedbackDisplayComponent implements OnInit {
  @Output() newFeedback = new EventEmitter<any>();
  
  addNewFeedBack(value : any){
    this.newFeedback.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}