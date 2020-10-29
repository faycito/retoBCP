import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bcpColumn]'
})
export class ColumnDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'flex-direction', 'column');
  }

}
