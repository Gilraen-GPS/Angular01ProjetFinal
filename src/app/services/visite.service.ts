import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visite } from '../modeles/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/contrat/";

  constructor(private httpClient:HttpClient) { }

  addVisite(visite : Visite){
      return this.httpClient.post<Visite>(this.url+"add", visite);
  }

  updateVisite(visite : Visite){
      return this.httpClient.put<Visite>(this.url+"update", visite, {observe : 'response'});
  }

  deleteVisite(idVisite : number){
      return this.httpClient.delete(this.url+"delete/"+idVisite, {observe : 'response'});
  }

  getAllVisite(){
      return this.httpClient.get(this.url+"getAll");
  }

  getByIdVisite(idVisite : number){
      return this.httpClient.get<Visite>(this.url+"getById/"+idVisite);
  }
}
