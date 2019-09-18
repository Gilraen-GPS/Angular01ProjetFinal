import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  idPersonne:number;
  indice = false;
  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit() {
  }

  supprimerContrat(){
  this.clientService.deleteClient(this.idPersonne).subscribe(reponse => { 
    if (reponse.status != 200){ 
    this.indice = true;
    this.router.navigate(['/client/delete'])
      
  }else{
    this.router.navigate(['/welcome'])
  }
});
  

}

}