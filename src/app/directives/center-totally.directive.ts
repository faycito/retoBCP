import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bcpCenterTotally]'
})
export class CenterTotallyDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'justify-content', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');

  }
}
