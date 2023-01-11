import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Presentacion } from '../model/presentacion.model';


@Injectable({
  providedIn: 'root'
})
export class PresentacionService {
  url = "http://localhost:8080/Presentacion"
  constructor(private http: HttpClient) { }

  public getPresentacion(): Observable<Presentacion>{
    return this.http.get<Presentacion>(this.url);
  }

}
