import { Component, OnInit } from '@angular/core';
import { AAcheterService } from '../services/a-acheter.service';
import { Router } from '@angular/router';
import { AAcheter } from '../modeles/aacheter';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
aAcheter : AAcheter = new AAcheter();
region : string = this.aAcheter.region;
indice: boolean=false;
indice2 : boolean = false;
aAcheters : any;

  constructor(private achatService : AAcheterService, private router: Router) { }

  ngOnInit() {
    this.indice2 = false;
  }

  rechercher(){
    this.achatService.getByRegionAAcheter(this.region).subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

}
