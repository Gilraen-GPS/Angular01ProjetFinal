import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../security/_services/authentication.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private appComponent : AppComponent
    ) { }

  ngOnInit() {
  }

  logOut(){
    this.authenticationService.logout();
  }

  indiceFalse(){
    this.appComponent.indice = false;
  }

}

