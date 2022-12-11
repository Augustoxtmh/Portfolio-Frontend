import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [								
    AppComponent, HeaderComponent,
      PresentacionComponent,
      ExperienciasComponent,
      ConocimientosComponent,
      EducacionComponent,
      ProyectosComponent
   ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
