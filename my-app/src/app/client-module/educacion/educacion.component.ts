import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  Educaciones: Educacion[] = [];

  constructor(public EducacionService: EducacionService) { }

  ngOnInit() {
    this.EducacionService.getEducacion().subscribe(data => {this.Educaciones = data} )
  }

}
