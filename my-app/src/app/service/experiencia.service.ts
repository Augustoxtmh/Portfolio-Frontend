import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "http://localhost:8080/Experiencia"
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url);
  }

  public updateExperiencia(experiencia: Experiencia): Observable<any>{
    
    return this.http.put<any>(this.url + '/Actualizar', experiencia, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public createExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.url + '/Crear', experiencia, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public deleteExperiencia(id: Number): Observable<any>{
    return this.http.delete(this.url + `/Borrar/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

}
