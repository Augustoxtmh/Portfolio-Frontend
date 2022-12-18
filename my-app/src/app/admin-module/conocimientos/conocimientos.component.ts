import { Component, OnInit } from '@angular/core';
import { Conocimiento } from './conocimiento.model';

@Component({
  selector: 'app-conocimientos-edit',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {

  constructor() { }

  

  conocimientos:Conocimiento[] = [
  ] ; 
  
  nuevoItem(){
    this.conocimientos.push(new Conocimiento())
  }

  eliminarCon(i:number){
    
    this.conocimientos.splice(i, 1)

  }

  actualizar(i:number, conocimientoNuevo:string, porcentajeNuevo:string){
  
    this.conocimientos[i].conocimiento = conocimientoNuevo;
    this.conocimientos[i].porcentaje = parseInt(porcentajeNuevo);
    
  }

  ngOnInit() {
  }

}
