import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class CrearItemService {

  constructor() { }

  actualizar(item:Item ,titulo:string, descripcion:string, url:string){
  
    item.titulo = titulo;
    item.descripcion = descripcion;
    item.url = url
    
  }

}
