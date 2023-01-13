import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Presentacion } from '../model/presentacion.model';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class PresentacionService {
  url = "http://localhost:8080/Presentacion"
  constructor(private http: HttpClient,private tokenService: TokenService) { }

  public getPresentacion(): Observable<Presentacion>{
    return this.http.get<Presentacion>(this.url);
  }

  public updatePresentacion(Presentacion: Presentacion): Observable<any>{
    
    return this.http.put<any>(this.url + '/Actualizar', Presentacion, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }
}
