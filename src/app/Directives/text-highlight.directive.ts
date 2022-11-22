import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }
}
