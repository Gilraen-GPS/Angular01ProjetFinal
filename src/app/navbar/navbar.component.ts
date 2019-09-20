import { Component, OnInit } from '@angular/core';
import { Agent } from 'Angular01ProjetFinal/src/app/modeles/agent';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  agent: Agent;
  constructor() { }

  ngOnInit() {
       

  }

}
