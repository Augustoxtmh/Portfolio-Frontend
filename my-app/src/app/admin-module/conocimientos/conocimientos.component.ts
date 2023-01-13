import { Component, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/model/conocimiento.model';
import { ConocimientoService } from 'src/app/service/conocimiento.service';

@Component({
  selector: 'app-conocimientos-edit',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {

  conocimientos: Conocimiento[] = [];

  constructor(private ConocimientoService: ConocimientoService) { }

  ngOnInit() {
    this.ConocimientoService.getConocimiento().subscribe(data => {this.conocimientos = data} )
  }

  newCono(){
    const cono = new Conocimiento("Conocimiento", 0);
    this.ConocimientoService.createConocimiento(cono).subscribe(data => {
      alert("Conocimiento Creado")
      window.location.reload();
    })
  }

  saveCono(cono: Conocimiento){
    this.ConocimientoService.updateConocimiento(cono).subscribe(data => {
      alert("Conocimiento Actualizado")
      window.location.reload();
      })
    }

  deleteCono(id?: Number){
    if (id != undefined){
      this.ConocimientoService.deleteConocimiento(id).subscribe(data => {
        alert("Conocimiento borrado")
        window.location.reload();
        })}
    }
}
