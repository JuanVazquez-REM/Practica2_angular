import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Practica2';
  Activado = false;

  onChangeList(boolean): void {
    this.Activado = boolean
  }

  
  ngOnInit(): void {
    
  }
}
