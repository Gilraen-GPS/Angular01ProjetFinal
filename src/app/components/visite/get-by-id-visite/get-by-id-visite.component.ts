import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/modeles/visite';
import { VisiteService } from 'src/app/services/visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id-visite',
  templateUrl: './get-by-id-visite.component.html',
  styleUrls: ['./get-by-id-visite.component.css']
})
export class GetByIdVisiteComponent implements OnInit {
  indice=false;
  indice2=false;
  idVisite:number;
  visite:Visite=new Visite;

  constructor(private visiteService: VisiteService, private router:Router) { }

  ngOnInit() {
  }

  rechercherVisite(){
    this.visiteService.getByIdVisite(this.idVisite).subscribe((vOut) => { if (vOut){
      this.indice2=false;
        this.indice=true;
      this.visite=vOut;
      
      }else{
        this.indice=false;
        this.indice2=true;
      }}
      
      );

  }

}
