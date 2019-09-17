import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modeles/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id-client',
  templateUrl: './get-by-id-client.component.html',
  styleUrls: ['./get-by-id-client.component.css']
})
export class GetByIdClientComponent implements OnInit {
  indice=false;
  indice2=false;
  idPersonne:number;
  client:Client=new Client;
  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit() {
  }

  rechercher(){
this.clientService.getByIdClient(this.idPersonne).subscribe((cOut) => { if (cOut){
this.indice2=false;
  this.indice=true;
this.client=cOut;

}else{
  this.indice=false;
  this.indice2=true;
}}

);
  }

}

