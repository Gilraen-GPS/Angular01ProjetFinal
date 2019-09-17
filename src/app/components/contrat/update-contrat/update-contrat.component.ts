import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modeles/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  contrat:Contrat=new Contrat;
id:number;

  constructor(private cService:ContratService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    // récupérer l'ID du param de la requete
this.ar.queryParams.subscribe((listeParams) => {this.id=listeParams['pIdContrat'];} ); 
//recuperer le contrat à partir de l'ID recupéré
this.cService.getByIdContrat(this.id).subscribe(cOut => {this.contrat=cOut;})

}

  modifierContrat(){
    this.cService.updateContrat(this.contrat).subscribe(reponse => { if (reponse.status == 200)
    { this.router.navigate(['/welcome']);
  }
});
  
}

}
