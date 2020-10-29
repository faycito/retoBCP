import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bcpRow]'
})
export class RowDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'flex-direction', 'row');
  }

}
