import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnInit {
  constructor() {}

  @HostBinding('style.color') color: string;

  ngOnInit() {
    this.color = 'black';
  }

  @HostListener('mouseenter') colorEnter() {
    this.color = 'white';
  }

  @HostListener('mouseleave') colorLeave() {
    this.color = '';
  }
}
