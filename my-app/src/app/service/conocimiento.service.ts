import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conocimiento } from '../model/conocimiento.model';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  url = "http://localhost:8080/Conocimiento"
  constructor(private http: HttpClient) { }

  public getConocimiento(): Observable<Conocimiento[]>{
    return this.http.get<Conocimiento[]>(this.url);
  }

}
