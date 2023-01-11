import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "http://localhost:8080/Proyecto"
  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url);
  }
}
