import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Proprietaire } from 'src/app/modeles/proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

@Component({
  selector: 'app-add-proprietaire',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.css']
})
export class AddProprietaireComponent implements OnInit {

  proprietaire: Proprietaire = new Proprietaire();
  constructor(private propService: ProprietaireService, private router: Router) { }

  ngOnInit() {

  }

  ajouterProp() {
    this.propService.addProprietaire(this.proprietaire).subscribe(propOut => {
      
        //si,letudiant est ajouter aller vers accueil 
        this.router.navigate(["proprietaire/getAll"])
      
    }
    );
  }



}
