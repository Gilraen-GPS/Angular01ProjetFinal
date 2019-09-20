import { Component, OnInit } from '@angular/core';
import { AAcheterService } from 'src/app/services/a-acheter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AAcheter } from 'src/app/modeles/aacheter';

@Component({
  selector: 'app-update-aacheter',
  templateUrl: './update-aacheter.component.html',
  styleUrls: ['./update-aacheter.component.css']
})
export class UpdateAAcheterComponent implements OnInit {

  aAcheter:AAcheter = new AAcheter();
  idBienImmobilier : number;

  constructor(private aAcheterService:AAcheterService, private router:Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.queryParams.subscribe((listeParams) => {
      this.idBienImmobilier = listeParams['pIdProprietaire'];
      //recuperer le proprietaire à partir de l'ID recupéré
      this.aAcheterService.getByIdAAcheter(this.idBienImmobilier).subscribe(aAcheterOut => { this.aAcheter = aAcheterOut; })
    });
  }


  modifier() {
    this.aAcheterService.updateAAcheter(this.aAcheter).subscribe(reponse => {
      if (reponse.status == 200) {
        this.router.navigate(['/aAcheter/getAll']);
      }
    });

  }
}
