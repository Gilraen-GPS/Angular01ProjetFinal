import { Component, OnInit } from '@angular/core';
import { ALouerService } from 'src/app/services/a-louer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-alouer',
  templateUrl: './delete-alouer.component.html',
  styleUrls: ['./delete-alouer.component.css']
})
export class DeleteALouerComponent implements OnInit {

  constructor(private aLouerService : ALouerService, private router : Router) { }
  idBienImmobilier : number;

  ngOnInit() {
  }

  supprimerALouer(){
    this.aLouerService.deleteALouer(this.idBienImmobilier).subscribe(response=>{
      if(response.status===200){
        this.router.navigate(['/aLouer/getAll']);
      }
    });

  }

}
