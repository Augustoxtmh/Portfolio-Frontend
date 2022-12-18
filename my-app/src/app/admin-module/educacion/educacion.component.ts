import { Component, OnInit } from '@angular/core';
import { CrearItemService } from '../crear-item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private crearItem:CrearItemService) { }
  
  educacion:Item[] = [] ; 

  nuevoItem(){

    this.educacion.push(new Item())

  }

  eliminarCon(i:number){
    
    this.educacion.splice(i, 1)

  }

  actualizar(i:Item, titulo:string, descripcion:string, url:string){
  
    this.crearItem.actualizar(i, titulo, descripcion, url)
    
  }
  ngOnInit() {
  }

}
