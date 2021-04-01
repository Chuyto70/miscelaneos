import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {


  @Input('appResaltado') nuevoColor:string = "yellow"
  constructor(private el: ElementRef) { 
    console.log('Hola desde una directiva');

    
  }

  @HostListener('mouseenter')mouseentro(){
    this.el.nativeElement.style.backgroundColor = this.nuevoColor
  }
  @HostListener('mouseleave')mousesalio(){
    this.el.nativeElement.style.backgroundColor = null
  }



}
