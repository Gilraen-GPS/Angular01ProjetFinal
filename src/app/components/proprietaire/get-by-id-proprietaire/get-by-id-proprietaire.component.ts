import { Component, OnInit } from '@angular/core';
import { Proprietaire } from 'src/app/modeles/proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-by-id-proprietaire',
  templateUrl: './get-by-id-proprietaire.component.html',
  styleUrls: ['./get-by-id-proprietaire.component.css']
})
export class GetByIdProprietaireComponent implements OnInit {

  indice = false;
  indice2 = false;
  idPersonne: number;
  proprietaire: Proprietaire = new Proprietaire;
  constructor(private propService: ProprietaireService, private router: Router) { }

  ngOnInit() {
  }

  rechercherProp() {
    this.propService.getByIdProprietaire(this.idPersonne).subscribe((propOut) => {
      if (propOut) {
        this.indice2 = false;
        this.indice = true;
        this.proprietaire = propOut;

      } else {
        this.indice = false;
        this.indice2 = true;
      }
    }

    );
  }

}
