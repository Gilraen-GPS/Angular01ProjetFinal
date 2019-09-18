import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.css']
})
export class DeleteCategorieComponent implements OnInit {

  idCategorie:number;
  constructor(private categorieService:CategorieService, private router:Router) { }

  ngOnInit() {
  }

  supprimerContrat(){
  this.categorieService.deleteCategorie(this.idCategorie).subscribe(reponse => { if (reponse.status == 200)
    { this.router.navigate(['/welcome']);
  }
});
  

}

}