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

  client: Client = new Client;
  indice = false;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }


  /*ajouterClient() {
    console.log("communicate: ", this.client);

    this.clientService.addClient(this.client).subscribe(success => {
      console.log("success", success);
        //this.router.navigate(["/welcome"])
     
    },(error)=>{
      console.log("erro", error);
    }

    );
  }*/

  ajouterClient() {

    console.log("communicate: ", this.client);

    this.clientService.addClient(this.client)

      .subscribe(data => {
        if (data.status == 200) {
          this.router.navigate(["/welcome"]);
        } else {
          this.indice = true;
        }
      },

      );
  }
}