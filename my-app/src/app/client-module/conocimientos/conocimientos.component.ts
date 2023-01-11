import { Component, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/model/conocimiento.model';
import { ConocimientoService } from 'src/app/service/conocimiento.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  conocimientos: Conocimiento[] = [];

  constructor(public conocimientoService: ConocimientoService) { }

  ngOnInit() {
    this.conocimientoService.getConocimiento().subscribe(data => {this.conocimientos = data} )
  }

  
}
