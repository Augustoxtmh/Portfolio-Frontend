import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conocimiento } from '../model/conocimiento.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  url = "https://portfolio-backend-lj8r.onrender.com/Conocimiento"
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getConocimiento(): Observable<Conocimiento[]>{
    return this.http.get<Conocimiento[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public updateConocimiento(Conocimiento: Conocimiento): Observable<any>{
    return this.http.put<any>(this.url + '/Actualizar', Conocimiento, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }

  public createConocimiento(Conocimiento: Conocimiento): Observable<any>{
    return this.http.post<any>(this.url + '/Crear', Conocimiento, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
    

  }

  public deleteConocimiento(id: Number): Observable<any>{
    return this.http.delete(this.url + `/Borrar/${id}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenService.getToken())
    });
  }
}
