import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AAcheter } from '../modeles/aacheter';

@Injectable({
  providedIn: 'root'
})
export class AAcheterService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/aAcheter/"

  constructor(private httpClient : HttpClient) { }

  addAAcheter(aAcheter : AAcheter){
    console.log(aAcheter);

    return this.httpClient.post<AAcheter>(this.url+"add", aAcheter, {observe : 'response'});
  }

  updateAAcheter(aAcheter : AAcheter){
    return this.httpClient.put<AAcheter>(this.url+"update", aAcheter, {observe : 'response'});
  }

  deleteCAAcheter(idAAcheter : number){
    return this.httpClient.delete(this.url+"delete/"+idAAcheter, {observe : 'response'});
  }

  getAllAAcheter(){
    return this.httpClient.get(this.url+"getAll");
  }

  getByIdAAcheter(idAAcheter : number){
    return this.httpClient.get<AAcheter>(this.url+"getById/"+idAAcheter);
  }

  getByRegionAAcheter(region : string){
    return this.httpClient.get<AAcheter>(this.url+"getRegionById/"+region);
  }
}
