import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from 'src/app/services/proprietaire.service';
import { Router } from '@angular/router';
import { Proprietaire } from 'src/app/modeles/proprietaire';
<<<<<<< HEAD

=======
>>>>>>> e2fb89dd1b49845582d1c7d82caf780f39508801

@Component({
  selector: 'app-get-all-proprietaire',
  templateUrl: './get-all-proprietaire.component.html',
  styleUrls: ['./get-all-proprietaire.component.css']
})
export class GetAllProprietaireComponent implements OnInit {

  proprietaires: any;
  
  idPersonne: number;
  page = 1;
  pageSize = 4;
  constructor(private propService: ProprietaireService,  private router: Router) { }

  ngOnInit() {
    this.propService.getAllProprietaire().subscribe(data => { this.proprietaires = data; });
    
  }

  supprimerProp(prop: Proprietaire) {
    this.propService.deleteProprietaire(prop.idPersonne).subscribe(reponse => {
      //si,la marrg est ajouter aller vers accueil 
      if (reponse.status === 200) {
        this.proprietaires = this.proprietaires.filter(propList => propList !== prop)
      }
    });
  }

}
