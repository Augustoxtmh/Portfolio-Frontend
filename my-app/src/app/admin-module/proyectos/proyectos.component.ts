import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private ProyectoService: ProyectoService,private router: Router) { }

  ngOnInit() {
    this.ProyectoService.getProyecto().subscribe(data => {this.proyectos = data} )
  }

  newProy(){
    const proy = new Proyecto("Titulo", "Descripcion", "Url de la Imagen");
    this.ProyectoService.createProyecto(proy).subscribe(data => {
      alert("Proyecto Creado")
      window.location.reload();
    })
  }

  saveProy(proy: Proyecto){
    this.ProyectoService.updateProyecto(proy).subscribe(data => {
    alert("Proyecto Actualizado")
    window.location.reload();
    })
  }

  deleteProy(id?: Number){
    if (id != undefined){
      this.ProyectoService.deleteProyecto(id).subscribe(data => {
        alert("Proyecto borrado")
        window.location.reload();
        })}
    }
  }
