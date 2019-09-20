import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/modeles/agent';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl : string;
  agent : Agent = new Agent();
  indice : boolean = false;

  constructor(private authService : AuthentificationService, private router : Router, private route : ActivatedRoute, private appComponent : AppComponent) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/welcome';
  }

  seConnecter () {
    this.authService.login(this.agent).subscribe((agentOut)=>{
      if(agentOut){
        localStorage.setItem('currentAgent',JSON.stringify(agentOut));
        this.router.navigate([this.returnUrl]);
      } else {
        this.indice=true;
      }
    });
  }

  

  indiceTrue(){
    this.appComponent.indiceTrue();
  }


}
