import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/Educacion"
  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url);
  }
}
