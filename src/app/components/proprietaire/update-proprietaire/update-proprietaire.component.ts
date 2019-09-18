import { Component, OnInit } from '@angular/core';
import { Proprietaire } from 'src/app/modeles/proprietaire';

import { Router, ActivatedRoute } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

@Component({
  selector: 'app-update-proprietaire',
  templateUrl: './update-proprietaire.component.html',
  styleUrls: ['./update-proprietaire.component.css']
})
export class UpdateProprietaireComponent implements OnInit {

  proprietaire: Proprietaire = new Proprietaire;
  idPersonne: number;

  constructor(private propService: ProprietaireService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    // récupérer l'ID du param de la requete
    this.ar.queryParams.subscribe((listeParams) => { this.idPersonne = listeParams['pIdProprietaire']; });
    //recuperer le proprietaire à partir de l'ID recupéré
    this.propService.getByIdProprietaire(this.idPersonne).subscribe(propOut => { this.proprietaire = propOut; })
  }

  modifierProp() {
    this.propService.updateProprietaire(this.proprietaire).subscribe(reponse => {
      if (reponse.status == 200) {
        this.router.navigate(['proprietaire/getAll']);
      }
    });

  }

}
