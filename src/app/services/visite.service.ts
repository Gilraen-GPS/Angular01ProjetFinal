import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visite } from '../modeles/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

    header=new HttpHeaders;

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/visite/";

  constructor(private httpClient:HttpClient) { }

  addVisite(visite : Visite,idImmobil:number,type:string){
      this.header.set('Access-Control-Allow-Origin','*')
      return this.httpClient.post<Visite>(this.url+"add?type="+type+"&idImmobil="+idImmobil, visite, {headers:this.header,observe:'response'});
  }

  updateVisite(visite : Visite){
    this.header.set('Access-Control-Allow-Origin','*')
      return this.httpClient.put<Visite>(this.url+"update", visite, {observe : 'response', headers:this.header});
  }

  deleteVisite(idVisite : number){
    this.header.set('Access-Control-Allow-Origin','*')
      return this.httpClient.delete(this.url+"delete/"+idVisite, {observe : 'response', headers:this.header});
  }

  getAllVisite(){
    this.header.set('Access-Control-Allow-Origin','*')
      return this.httpClient.get(this.url+"getAll", {headers:this.header});
  }

  getByIdVisite(idVisite : number){
    this.header.set('Access-Control-Allow-Origin','*')
      return this.httpClient.get<Visite>(this.url+"getById/"+idVisite, {headers:this.header});
  }
}
