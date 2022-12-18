import { Component, OnInit } from '@angular/core';
import { CrearItemService } from '../crear-item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-experiencias-edit',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencia:Item[] = [] ; 

  constructor(private crearItem:CrearItemService){ }

  nuevoItem(){

    this.experiencia.push(new Item())

  }

  eliminarCon(i:number){
    
    this.experiencia.splice(i, 1)

  }

  actualizar(i:Item, titulo:string, descripcion:string, url:string){
    this.crearItem.actualizar(i, titulo, descripcion, url)
  }

  ngOnInit() {
  }

}
