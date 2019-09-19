import { Component, OnInit } from '@angular/core';
import { ALouerService } from 'src/app/services/a-louer.service';
import { Router } from '@angular/router';
import { ALouer } from 'src/app/modeles/alouer';

@Component({
  selector: 'app-get-by-id-alouer',
  templateUrl: './get-by-id-alouer.component.html',
  styleUrls: ['./get-by-id-alouer.component.css']
})
export class GetByIdALouerComponent implements OnInit {

  indice=false;
  indice2=false;
  idALouer:number;
  aLouer:ALouer=new ALouer;
  ;

  constructor(private aLouerService: ALouerService, private router:Router) { }

  ngOnInit() {
  }

  rechercherALouer(){
    this.aLouerService.getByIdALouer(this.idALouer).subscribe((vOut) => { if (vOut){
      this.indice2=false;
        this.indice=true;
      this.aLouer=vOut;
      
      }else{
        this.indice=false;
        this.indice2=true;
      }}
      
      );

  }

}
