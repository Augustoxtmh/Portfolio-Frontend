import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './footer/footer.component';
import { CrearItemService } from './crear-item.service';

@NgModule({
    declarations: [AdminComponent, ConocimientosComponent, EducacionComponent, PresentacionComponent, ExperienciasComponent,
      HeaderComponent, ProyectosComponent, FooterComponent],
    
    providers: [CrearItemService],

    imports: [
        CommonModule
    ],
    exports:[
      AdminComponent, ConocimientosComponent, EducacionComponent, PresentacionComponent, ExperienciasComponent,
      HeaderComponent, ProyectosComponent, FooterComponent
    ]
})
export class AdminModule { }
