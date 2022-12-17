import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }
  
  items:number[] = [1] ; 

  nuevoItem(){

    this.items.push(1)

  }
  ngOnInit() {
  }

}
