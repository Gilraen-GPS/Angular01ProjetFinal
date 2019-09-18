import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/modeles/categorie';

@Component({
  selector: 'app-get-all-categorie',
  templateUrl: './get-all-categorie.component.html',
  styleUrls: ['./get-all-categorie.component.css']
})
export class GetAllCategorieComponent implements OnInit {
  
  categories : any;
  
  constructor(private categorieService : CategorieService, private router : Router) { }

  naviguer(categorie:Categorie){
    this.categorieService.deleteCategorie(categorie.idCategorie).subscribe(reponse => { if (reponse.status == 200)
      { this.categories=this.categories.filter( cList => cList!=categorie)
    }
  });
    
  
  }

  ngOnInit() {
    this.categorieService.getAllCategorie().subscribe(data=>{
      this.categories=data;
    });
  }

}