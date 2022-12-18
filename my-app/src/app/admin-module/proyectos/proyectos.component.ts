import { Component, OnInit } from '@angular/core';
import { CrearItemService } from '../crear-item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private crearItem:CrearItemService) { }

  proyectos:Item[] = [] ; 

  nuevoItem(){

    this.proyectos.push(new Item())

  }

  eliminarCon(i:number){
    
    this.proyectos.splice(i, 1)

  }

  actualizar(i:Item, titulo:string, descripcion:string, url:string){
  
    this.crearItem.actualizar(i, titulo, descripcion, url)
    
  }

  ngOnInit() {
  }

}
