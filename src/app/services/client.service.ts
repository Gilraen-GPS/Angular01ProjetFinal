import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../modeles/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/client/";

  constructor(private httpClient : HttpClient) { }

  addClient(client : Client){
    return this.httpClient.post<Client>(this.url+"add", client);
  }

  updateClient(client : Client){
    return this.httpClient.put<Client>(this.url+"update", client, {observe : 'response'});
  }

  deleteClient(idClient : number){
    return this.httpClient.delete(this.url+"delete/"+idClient, {observe : 'response'});
  }

  getAllClient(){
    return this.httpClient.get(this.url+"getAll");
  }

  getByIdClient(idClient : number){
    return this.httpClient.get<Client>(this.url+"getById/"+idClient);
  }
}
