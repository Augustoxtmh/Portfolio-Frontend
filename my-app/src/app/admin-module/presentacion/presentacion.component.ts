import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/model/presentacion.model';
import { PresentacionService } from 'src/app/service/presentacion.service';

@Component({
  selector: 'app-presentacion-edit',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  presen: Presentacion
  presenCargada = false;

  constructor(private presentacionService: PresentacionService) { }

  ngOnInit() {
    this.presentacionService.getPresentacion().subscribe(data => {
      this.presen = data;
      this.presenCargada = true;
    });
  }
  
  savePresen(){

    this.presentacionService.updatePresentacion(this.presen).subscribe(data => {
    alert("Presentacion actualizada")
    window.location.reload();
    })
  }

}
