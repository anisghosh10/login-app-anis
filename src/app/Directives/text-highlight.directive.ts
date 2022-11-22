import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = '';
  }
  @HostBinding('style.backgroundColor') color!: string;

  @HostListener('mouseenter') backColorEnter(){
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave') backColorLeave(){
    (this.element.nativeElement as HTMLElement).style.backgroundColor = '';
  }

}
