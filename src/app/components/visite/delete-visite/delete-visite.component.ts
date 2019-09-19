import { Component, OnInit } from '@angular/core';
import { VisiteService } from 'src/app/services/visite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-visite',
  templateUrl: './delete-visite.component.html',
  styleUrls: ['./delete-visite.component.css']
})
export class DeleteVisiteComponent implements OnInit {
  idVisite:number;

  constructor(private visiteService:VisiteService, private router:Router) { }

  ngOnInit() {
  }

  supprimerVisite(){
    this.visiteService.deleteVisite(this.idVisite).subscribe(reponse => { if (reponse.status == 200)
      { this.router.navigate(['/welcome']);
    }
  });
  }

}
