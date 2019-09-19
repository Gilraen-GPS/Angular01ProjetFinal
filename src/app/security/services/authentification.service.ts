import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agent } from 'src/app/modeles/agent';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public currentAgent : Agent;

  url : string = "http://localhost:8082/01_Agence_Immobiliere/rest/agent/";

  constructor(private http : HttpClient) { }

  login(agent:Agent){
    return this.http.post<Agent>(this.url+"isExist", agent);
  }

  logout(){
    localStorage.removeItem('currentAgent');
  }


}
