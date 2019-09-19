import { Component, OnInit } from '@angular/core';
import { ALouer } from 'src/app/modeles/alouer';
import { Router } from '@angular/router';
import { ALouerService } from 'src/app/services/a-louer.service';

@Component({
  selector: 'app-add-alouer',
  templateUrl: './add-alouer.component.html',
  styleUrls: ['./add-alouer.component.css']
})
export class AddALouerComponent implements OnInit {

  aLouer:ALouer = new ALouer();
  
  constructor(private router : Router, private aLouerService : ALouerService) { }

  ngOnInit() {
  }

  ajouterALouer(){
    this.aLouerService.addALouer(this.aLouer).subscribe(response=>{
      
        this.router.navigate(['/aLouer/getAll']);
      }
    );
  }

}
