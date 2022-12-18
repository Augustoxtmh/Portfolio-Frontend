import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  guardarItem(tupla:string[]){

    this.httpClient.post("https://console.firebase.google.com/project/portfolio-b4d4b/database/portfolio-b4d4b-default-rtdb/data/~2F?hl=es/datos.json", tupla);

  }

}
