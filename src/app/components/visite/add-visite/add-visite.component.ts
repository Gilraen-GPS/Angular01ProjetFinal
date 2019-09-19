import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/modeles/visite';
import { VisiteService } from 'src/app/services/visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visite',
  templateUrl: './add-visite.component.html',
  styleUrls: ['./add-visite.component.css']
})
export class AddVisiteComponent implements OnInit {
  type:string;
  visite:Visite=new Visite;
  idImmobil:number
  constructor(private visiteService:VisiteService, private router:Router) { }

  ngOnInit() {
  }

  ajouterVisite(){
    this.visiteService.addVisite(this.visite,this.idImmobil,this.type).subscribe((vOut) => { if (vOut!=null) {
      this.router.navigate(["/welcome"])
}}
);
}
  }


