import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/modeles/visite';
import { ActivatedRoute, Router } from '@angular/router';
import { VisiteService } from 'src/app/services/visite.service';

@Component({
  selector: 'app-update-visite',
  templateUrl: './update-visite.component.html',
  styleUrls: ['./update-visite.component.css']
})
export class UpdateVisiteComponent implements OnInit {
  visite:Visite=new Visite;
  idVisite:number;

  constructor(private visiteService: VisiteService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {/*
    // récupérer l'ID du param de la requete
this.ar.queryParams.subscribe((listeParams) => {this.idVisite=listeParams['pId'];} ); 
//recuperer le contrat à partir de l'ID recupéré
this.visiteService.getByIdVisite(this.idVisite).subscribe(vOut => {this.visite=vOut;})*/
  }

  modifierVisite(){
    this.visiteService.updateVisite(this.visite).subscribe(reponse => { if (reponse.status == 200)
    { this.router.navigate(['/welcome']);
  }
});}

}
