import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    indice : boolean = false;

    constructor(
        private router: Router,
    ) {
    }

    indiceTrue(){
        this.indice=true;
    }
}
