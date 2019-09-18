import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from 'src/app/services/proprietaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-proprietaire',
  templateUrl: './delete-proprietaire.component.html',
  styleUrls: ['./delete-proprietaire.component.css']
})
export class DeleteProprietaireComponent implements OnInit {

  idPersonne:number;
  constructor(private propService: ProprietaireService, private router:Router) { }

  ngOnInit() {
  }
  supprimerProp(){
    this.propService.deleteProprietaire(this.idPersonne).subscribe(reponse => { if (reponse.status == 200)
      { this.router.navigate(['/proprietaire/getAll']);
     }
    });
  }
}
