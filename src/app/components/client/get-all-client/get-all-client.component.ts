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

  clients: any;
  
  idPersonne: number;
 
  constructor(private clientService: ClientService,  private router: Router) { }

  
  naviguer(client:Client){
    this.clientService.deleteClient(client.idPersonne).subscribe(reponse => { if (reponse.status == 200)
      { this.clients=this.clients.filter( cList => cList!=client)
    }
  });
    
  
  }
  ngOnInit() {
    this.clientService.getAllClient().subscribe(data => { this.clients = data; });
    
  }

}
