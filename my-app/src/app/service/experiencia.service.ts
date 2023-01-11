import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "http://localhost:8080/Experiencia"
  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url);
  }

  public deleteExperiencia(id: Number){
    return this.http.delete(this.url + `/Borrar/${id}`);
  }

}
