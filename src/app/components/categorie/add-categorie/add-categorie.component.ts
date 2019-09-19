import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/modeles/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  selectedFile=null;
  categorie:Categorie  =new Categorie;



  constructor(private categorieService:CategorieService, private router:Router) { }

  ngOnInit() {
  }

  onFileSelected(event){

    this.selectedFile=event.target.files[0];
  }

  ajouterContrat(){
    this.categorieService.addCategorie(this.categorie).subscribe((cOut) => { if (cOut!=null) {
                          this.router.navigate(["/welcome"])
                  }}
                  );
                }
                

  

}
