import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/modeles/client';

@Component({
  selector: 'app-get-all-client',
  templateUrl: './get-all-client.component.html',
  styleUrls: ['./get-all-client.component.css']
})
export class GetAllClientComponent implements OnInit {

  client: any;
  
  idClient: number;
 
  constructor(private clService: ClientService,  private router: Router) { }

  ngOnInit() {
    this.clService.getAllClient().subscribe(data => { this.client = data; });
    
  }

  /*supprimerCl(cl: Client) {
    this.clService.deleteClient(cl.idClient).subscribe(reponse => {
      //si,la carg est ajouter aller vers accueil 
      if (reponse.status === 200) {
        this.client = this.client.filter(clList => clList !== cl)
      }
    });
  }*/

}
