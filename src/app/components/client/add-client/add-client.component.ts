import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modeles/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client : Client = new Client();
  constructor(private clService : ClientService , private router: Router) { }

  ngOnInit() {
    
  }
  ajouterClient(){
    this.clService.addClient(this.client).subscribe(clOut =>{
      if(clOut.idPersonne != 0){
        //si,letudiant est ajouter aller vers accueil 
          this.router.navigate(["/client/getAll"])
      }
    })
  }



}
