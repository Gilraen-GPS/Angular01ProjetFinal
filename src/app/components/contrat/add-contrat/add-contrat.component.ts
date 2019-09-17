import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modeles/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {

  contrat:Contrat  =new Contrat();

  constructor(private cService:ContratService, private router:Router) { }

  ngOnInit() {
  }

  
  ajouterContrat(){
    this.cService.addContrat(this.contrat).subscribe((cOut) => { if (cOut.idContrat!=0) {
                          this.router.navigate(["/contrat/getAll"])
                  }}
                  );
                }
                

  

}
