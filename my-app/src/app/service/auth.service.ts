import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo_usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://portfolio-backend-lj8r.onrender.com/auth';
  constructor(private httpClient: HttpClient) { }

  public nuevoUsu(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + '/Nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{

    return this.httpClient.post<JwtDto>(this.authURL + '/Login', loginUsuario);
  }
}
