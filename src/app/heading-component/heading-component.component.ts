import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-component',
  templateUrl: './heading-component.component.html',
  styleUrls: ['./heading-component.component.css']
})
export class HeadingComponentComponent implements OnInit {
  @Input('child-alias') heading;

  constructor() { }

  ngOnInit() {
  }

}