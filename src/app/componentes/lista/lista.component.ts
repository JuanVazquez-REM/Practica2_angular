import { Component, OnInit ,Input} from '@angular/core';
import { Card } from '../../interfaces/card'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public cards:Array<Card> = []
  
  constructor() { }

  ngOnInit(): void {

    this.cards = [
      {
        'matricula':19170059,
        'nombre':'juan',
        'apellidos':'vazquez lozoria',
        'edad':19,
        'grupo':5,
        'seccion':'a'
      },
      {
        'matricula':19170142,
        'nombre':'carlos',
        'apellidos':'perez lopez',
        'edad':19,
        'grupo':5,
        'seccion':'a'
      },
      {
        'matricula':18170072,
        'nombre':'adrian',
        'apellidos':'hernandez consuselos',
        'edad':19,
        'grupo':5,
        'seccion':'b'
      },
      {
        'matricula':19170059,
        'nombre':'abril',
        'apellidos':'de avila maa',
        'edad':19,
        'grupo':5,
        'seccion':'b'
      },
    ]
  }

}
