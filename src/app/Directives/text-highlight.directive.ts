import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.color = 'black';
  }
  @HostBinding('style.color') color: string;

  @HostListener('mouseenter') backColorEnter() {
    this.color = 'white';
  }

  @HostListener('mouseleave') backColorLeave() {
    this.color = '';
  }
}
