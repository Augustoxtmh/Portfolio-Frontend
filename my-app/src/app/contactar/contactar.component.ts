import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  
  constructor(private router:Router) { }

  volverInicio(){
    this.router.navigate([""]);
  }

  ngOnInit() {
  }

}
