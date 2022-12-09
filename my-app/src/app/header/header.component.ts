import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  habil_bot = false;
  NombreCreado(value:String){
    this.habil_bot = true
  }


  constructor() { }

  ngOnInit() {
  }

}
