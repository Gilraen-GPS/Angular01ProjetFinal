import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthentificationService } from '../security/services/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authentificationService: AuthentificationService,
    private appComponent : AppComponent,
    private router : Router
    ) { }

  ngOnInit() {
  }

  seDeconnecter(){
    this.authentificationService.logout();
    this.router.navigate(['/login'])
  }

  indiceFalse(){
    this.appComponent.indice = false;
  }

}

