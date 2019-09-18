import { Component, OnInit } from '@angular/core';
import { AAcheterService } from 'src/app/services/a-acheter.service';
import { Router } from '@angular/router';
import { AAcheter } from 'src/app/modeles/aacheter';

@Component({
  selector: 'app-get-by-id-aacheter',
  templateUrl: './get-by-id-aacheter.component.html',
  styleUrls: ['./get-by-id-aacheter.component.css']
})
export class GetByIdAAcheterComponent implements OnInit {

  idBienImmobilier : number;
  indice : boolean = false;
  aAcheter : AAcheter = new AAcheter();

  constructor(private aAcheterService : AAcheterService, private router : Router) { }

  ngOnInit() {
  }

  getById(){
    this.aAcheterService.getByIdAAcheter(this.idBienImmobilier).subscribe(aAcheterOut=>{
      if(aAcheterOut){
        this.indice=true;
        this.aAcheter=aAcheterOut;
      } else {
        this.indice=false;
      }
    });
  }

}
