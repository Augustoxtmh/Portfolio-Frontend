import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias-edit',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  constructor() { }

  items:number[] = [1] ; 

  nuevoItem(){

    this.items.push(1)

  }

  ngOnInit() {
  }

}
