import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLogged = false;
  constructor(private tokenService: TokenService, private router: Router) { }


  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  logOut(){
    this.tokenService.logOut();
    this.router.navigate(['']);
  }
}
