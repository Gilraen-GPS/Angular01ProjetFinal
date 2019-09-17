import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modeles/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id-contrat',
  templateUrl: './get-by-id-contrat.component.html',
  styleUrls: ['./get-by-id-contrat.component.css']
})
export class GetByIdContratComponent implements OnInit {
  indice=false;
  indice2=false;
  idContrat:number;
  contrat:Contrat=new Contrat;
  constructor(private cService:ContratService, private router:Router) { }

  ngOnInit() {
  }

  rechercher(){
this.cService.getByIdContrat(this.idContrat).subscribe((cOut) => { if (cOut){
this.indice2=false;
  this.indice=true;
this.contrat=cOut;

}else{
  this.indice=false;
  this.indice2=true;
}}

);
  }

}
