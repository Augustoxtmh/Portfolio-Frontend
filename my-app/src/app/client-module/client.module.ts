import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ ProyectosComponent, ConocimientosComponent, EducacionComponent,
  PresentacionComponent, ExperienciasComponent, HeaderComponent, FooterComponent ,ClientComponent],

  imports: [
    CommonModule, RouterModule
  ],
  exports:[
    ClientComponent, ProyectosComponent, ConocimientosComponent, EducacionComponent,
    PresentacionComponent, ExperienciasComponent, HeaderComponent, FooterComponent
  ]
})
export class ClientModule { }
