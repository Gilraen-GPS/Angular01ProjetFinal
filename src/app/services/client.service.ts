import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../modeles/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/client/";

  header = new HttpHeaders;

  constructor(private httpClient : HttpClient) { }

  addClient(client : Client){
    this.header.set('Access-Control-Allow-Origin', '*')
    return this.httpClient.post<Client>(this.url+"add", client,{headers:this.header,observe : 'response'});
  }

 /*addClient(client: Client): Observable<Object> {
    return this.httpClient.post(`${this.url}`, client);
  }*/

  updateClient(client : Client){
    return this.httpClient.put<Client>(this.url+"update", client, {observe : 'response'});
  }

  deleteClient(idPersonne : number){
    return this.httpClient.delete(this.url+"delete/"+idPersonne, {observe : 'response'});
  }

  getAllClient(){
    return this.httpClient.get(this.url+"getAll");
  }

  getByIdClient(idPersonne : number){
    return this.httpClient.get<Client>(this.url+"getById/"+idPersonne);
  }
}
