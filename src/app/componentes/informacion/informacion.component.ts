import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../interfaces/card'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  Activado = false;
  public desa:Boolean
  
  
  constructor() { }

  @Input() alumnos:Card
  public mostrar:Boolean
  

  Mostrarmas(): void{
    if(this.mostrar){
      this.mostrar = false
    }else{
      this.mostrar = true
    }
  }

  desabilitar(): void{
    if(this.desa){
      this.desa = false
    }else{
      this.desa = true
    }
  }
  

  ngOnInit(): void {
  }

  onChange(Bool): void {
    this.Activado = Bool
  }
}
