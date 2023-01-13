import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias-edit',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService,private aRoute: ActivatedRoute ,private router: Router) { }

  ngOnInit() {
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data} )
  }

  newExp(){
    const exp = new Experiencia("Titulo", "Descripcion", "Url de la Imagen");
    this.experienciaService.createExperiencia(exp).subscribe(data => {
      alert("Experiencia Creada")
      window.location.reload();

    })
  }

  saveExp(exp: Experiencia){
    this.experienciaService.updateExperiencia(exp).subscribe(data => {
      alert("Experiencia Actualizada")
      window.location.reload();
      })
    }

  
  deleteExp(id?: Number){
    if (id != undefined){
      this.experienciaService.deleteExperiencia(id).subscribe(data => {
        alert("Experiencia borrada")
        window.location.reload();
        })}
    }

}

