import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modeles/client';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  client:Client=new Client;
id:number;

  constructor(private clientService:ClientService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    // récupérer l'ID du param de la requete
this.ar.queryParams.subscribe((listeParams) => {this.id=listeParams['pIdPersonne'];} ); 
//recuperer le contrat à partir de l'ID recupéré
this.clientService.getByIdClient(this.id).subscribe(cOut => {this.client=cOut;})

}

  modifierClient(){
    this.clientService.updateClient(this.client).subscribe(reponse => { if (reponse.status == 200)
    { 
      
      console.log("reponse:", reponse);
      this.router.navigate(['/welcome']);
  }
});
  
}

}