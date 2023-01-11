import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias-edit',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia[] = [];
  

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit() {
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data} )
  }

}
