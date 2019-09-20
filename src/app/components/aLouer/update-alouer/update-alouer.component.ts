import { Component, OnInit } from '@angular/core';
import { ALouer } from 'src/app/modeles/alouer';
import { ALouerService } from 'src/app/services/a-louer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-alouer',
  templateUrl: './update-alouer.component.html',
  styleUrls: ['./update-alouer.component.css']
})
export class UpdateALouerComponent implements OnInit {

alouer:ALouer=new ALouer();

  constructor(private aLouerService:ALouerService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
  }

  modifierALouer(){
    this.aLouerService.updateALouer(this.alouer).subscribe(reponse => { if (reponse.status == 200)
    { this.router.navigate(['/welcome']);
  }
});}

}
