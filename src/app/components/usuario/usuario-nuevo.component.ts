import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private parmatetros:ActivatedRoute) { 
    this.parmatetros.parent?.params.subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
