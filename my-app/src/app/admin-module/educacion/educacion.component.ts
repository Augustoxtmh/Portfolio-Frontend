import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];

  constructor(private EducacionService: EducacionService) { }

  ngOnInit() {
    this.EducacionService.getEducacion().subscribe(data => {this.educaciones = data} )
  }

  newEdu(){
    const edu = new Educacion("Titulo", "Descripcion", "Url de la Imagen");
    this.EducacionService.createEducacion(edu).subscribe(data => {
      alert("Educacion Creada")
      window.location.reload();
    })
  }

  saveEdu(edu: Educacion){
    this.EducacionService.updateEducacion(edu).subscribe(data => {
      alert("Educacion Actualizada")
      window.location.reload();
      })
    }

  deleteEdu(id?: Number){
    if (id != undefined){
      this.EducacionService.deleteEducacion(id).subscribe(data => {
        alert("Educacion borrada")
        window.location.reload();
        })}
    }

}
