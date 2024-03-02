import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proyecto } from '../model/proyecto.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "https://portfolio-backend-lj8r.onrender.com/Proyecto"
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url);
  }
  public updateProyecto(Proyecto: Proyecto): Observable<any>{
    
    return this.http.put<any>(this.url + '/Actualizar', Proyecto, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public createProyecto(Proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.url + '/Crear', Proyecto, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public deleteProyecto(id: Number): Observable<any>{
    return this.http.delete(this.url + `/Borrar/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }
}
