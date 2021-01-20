import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExtraComponent } from './componentes/extra/extra.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    InformacionComponent,
    ExtraComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
