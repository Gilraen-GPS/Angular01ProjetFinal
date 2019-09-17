import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ALouer } from '../modeles/alouer';


@Injectable({
  providedIn: 'root'
})
export class ALouerService {
  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/contrat/";

  constructor(private httpClient:HttpClient) { }

  addALouer(aLouer : ALouer){
      return this.httpClient.post<ALouer>(this.url+"add", aLouer);
  }

  updateALouer(aLouer : ALouer){
      return this.httpClient.put<ALouer>(this.url+"update", aLouer, {observe : 'response'});
  }

  deleteALouer(idVisite : number){
      return this.httpClient.delete(this.url+"delete/"+idVisite, {observe : 'response'});
  }

  getAllALouer(){
      return this.httpClient.get(this.url+"getAll");
  }

  getByIdALouer(idVisite : number){
      return this.httpClient.get<ALouer>(this.url+"getById/"+idVisite);
  }
}
