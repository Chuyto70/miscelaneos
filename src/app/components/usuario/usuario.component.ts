import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private parametros: ActivatedRoute) {

    parametros.params.subscribe(param=>{
      console.log(param);
    })
   }

  ngOnInit(): void {
  }

}
