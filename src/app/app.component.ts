import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './security/_services';
import { User } from './security/_models';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    indice : boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    indiceTrue(){
        this.indice=true;
    }
}
