import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  crearNombre:string="";
  crearApllido:string="";
  crearCargo:string="";
  crearSalario:number=0;

  empleados:Empleado[]=[
    new Empleado("Juan", "Haser", "Presidente", 100000000),
    new Empleado("Lucas", "Sanchez", "Vicepresidente", 1000000),
    new Empleado("Pedro", "Ramirez", "Director", 1000000)
  ];

  Cargar(){
    this.empleados.push(new Empleado(this.crearNombre, this.crearApllido, this.crearCargo, this.crearSalario));
  }

  constructor() { }

  ngOnInit() {
  }

}
