import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrat } from '../modeles/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/contrat/";

  constructor(private httpClient:HttpClient) { }

  addContrat(contrat : Contrat){
      return this.httpClient.post<Contrat>(this.url+"add", contrat);
  }

  updateContrat(contrat : Contrat){
      return this.httpClient.put<Contrat>(this.url+"update", contrat, {observe : 'response'});
  }

  deleteContrat(idContrat : number){
      return this.httpClient.delete(this.url+"delete/"+idContrat, {observe : 'response'});
  }

  getAllContrat(){
      return this.httpClient.get(this.url+"getAll");
  }

  getByIdContrat(idContrat : number){
      return this.httpClient.get<Contrat>(this.url+"getById/"+idContrat);
  }
}
