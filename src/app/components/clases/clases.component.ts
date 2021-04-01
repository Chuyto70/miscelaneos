import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
alerta:string = 'alert-info'
loading:string = 'fa-save'
validador:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  load(){
    this.loading = 'fa-refresh fa-spin'
    this.validador = true
    setTimeout(()=>{
      this.loading = 'fa-save'
      this.validador = false
    }, 3000)
  }

}
