import { ElementRef, HostBinding, Input } from '@angular/core';
import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
  
  @Input() p : string;
  @HostBinding('style.border') hostborder: string;


  constructor(private el: ElementRef,private renderer : Renderer2) 
  {}
  changeBgColor(color: string){
      this.renderer.setStyle(this.el.nativeElement,'color',color);
}
 @HostListener('click') foo()
{
  alert("hello");
}
@HostListener('mouseenter') abc(){
  this.changeBgColor(this.p);
  this.hostborder='5px  solid green';

} 
  color(color: any) {
    throw new Error('Method not implemented.');
  }
@HostListener('mouseleave') xyz(){
  this.changeBgColor('black');
  this.hostborder="";
}
 }


