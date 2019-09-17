import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../modeles/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/categorie/";

  constructor(private httpClient : HttpClient) { }

  addCategorie(categorie : Categorie){
    return this.httpClient.post<Categorie>(this.url+"add", categorie);
  }

  updateCategorie(categorie : Categorie){
    return this.httpClient.put<Categorie>(this.url+"update", categorie, {observe : 'response'});
  }

  deleteCategorie(idCategorie : number){
    return this.httpClient.delete(this.url+"delete/"+idCategorie, {observe : 'response'});
  }

  getAllCategorie(){
    return this.httpClient.get(this.url+"getAll");
  }

  getByIdCategorie(idCategorie : number){
    return this.httpClient.get<Categorie>(this.url+"getById/"+idCategorie);
  }
}
