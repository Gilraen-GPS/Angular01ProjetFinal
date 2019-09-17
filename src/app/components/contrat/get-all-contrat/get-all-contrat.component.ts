import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/modeles/contrat';

@Component({
  selector: 'app-get-all-contrat',
  templateUrl: './get-all-contrat.component.html',
  styleUrls: ['./get-all-contrat.component.css']
})
export class GetAllContratComponent implements OnInit {

  contrats : any;
  page = 1;
  pageSize = 4;

  constructor(private contratService : ContratService, private router : Router) { }

  naviguer(contrat:Contrat){
    this.contratService.deleteContrat(contrat.idContrat).subscribe(reponse => { if (reponse.status == 200)
      { this.contrats=this.contrats.filter( cList => cList!=contrat)
    }
  });
    
  
  }

  ngOnInit() {
    this.contratService.getAllContrat().subscribe(data=>{
      this.contrats=data;
    });
  }

}
