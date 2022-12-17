import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocimientos-edit',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  constructor() { }

  items:number[] = [1] ; 

  nuevoItem(){

    this.items.push(1)

  }

  ngOnInit() {
  }

}
