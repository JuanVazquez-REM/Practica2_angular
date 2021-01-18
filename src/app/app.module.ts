import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
