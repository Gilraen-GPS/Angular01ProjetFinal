import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-contrat',
  templateUrl: './delete-contrat.component.html',
  styleUrls: ['./delete-contrat.component.css']
})
export class DeleteContratComponent implements OnInit {

  idContrat:number;
  constructor(private cService:ContratService, private router:Router) { }

  ngOnInit() {
  }

  supprimerContrat(){
  this.cService.deleteContrat(this.idContrat).subscribe(reponse => { if (reponse.status == 200)
    { this.router.navigate(['/welcome']);
  }
});
  

}

}