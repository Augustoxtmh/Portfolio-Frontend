import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Educacion } from '../model/educacion.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "https://portfolio-backend-lj8r.onrender.com/Educacion"
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url);
  }

  public updateEducacion(Educacion: Educacion): Observable<any>{
    
    return this.http.put<any>(this.url + '/Actualizar', Educacion, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public createEducacion(Educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.url + '/Crear', Educacion, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public deleteEducacion(id: Number): Observable<any>{
    return this.http.delete(this.url + `/Borrar/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }
}
