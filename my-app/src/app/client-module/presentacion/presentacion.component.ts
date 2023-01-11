import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/model/presentacion.model';
import { PresentacionService } from 'src/app/service/presentacion.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  presen: Presentacion = new Presentacion("", "", "", "");

  constructor(public presentacionService: PresentacionService) { }

  ngOnInit() {
    this.presentacionService.getPresentacion().subscribe(data => {this.presen = data} )
  }

}
