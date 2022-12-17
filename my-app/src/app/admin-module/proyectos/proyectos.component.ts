import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  items:number[] = [1] ; 

  nuevoItem(){

    this.items.push(1)

  }

  ngOnInit() {
  }

}
