import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../modeles/proprietaire';
import { ProprietaireService } from '../services/proprietaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bien-immo-prop',
  templateUrl: './bien-immo-prop.component.html',
  styleUrls: ['./bien-immo-prop.component.css']
})
export class BienImmoPropComponent implements OnInit {

  proprietaire: Proprietaire = new Proprietaire();
  constructor(private propService: ProprietaireService, private router: Router) { }

  ngOnInit() {

  }

  ajouterProp() {
    this.propService.addProprietaire(this.proprietaire).subscribe(propOut => {
      
        //si,letudiant est ajouter aller vers accueil 
        this.router.navigate(["welcome-primaire"])
      
    }
    );
  }


}
