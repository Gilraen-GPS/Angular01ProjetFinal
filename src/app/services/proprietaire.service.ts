import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proprietaire } from '../modeles/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/proprietaire/";

  constructor(private httpClient : HttpClient){}

  addProprietaire(proprietaire : Proprietaire){
    return this.httpClient.post<Proprietaire>(this.url+"add", proprietaire);
  }

  updateProprietaire(proprietaire : Proprietaire){
    return this.httpClient.put<Proprietaire>(this.url+"update", proprietaire, {observe : 'response'});
  }

  deleteProprietaire(idProprietaire : number){
    return this.httpClient.delete(this.url+"delete/"+idProprietaire, {observe : 'response'});
  }

  getAllProprietaire(){
    return this.httpClient.get(this.url+"getAll");
  }

  getByIdProprietaire(idProprietaire : number){
    return this.httpClient.get<Proprietaire>(this.url+"getById/"+idProprietaire);
  }

}
