import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle] ="{'font-size': tamano+'px'}">
      Hola mundo, soy Jesus y estoy probando el NgStyle
    </p>

    <button class="btn btn-primary" [ngStyle] = "{'margin-right': '5px'}" (click)="tamano = tamano + 2"><i class="fa fa-plus"></i></button>
    <button class="btn btn-danger" (click)="tamano = tamano - 2"><i class="fa fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {


  tamano:number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
