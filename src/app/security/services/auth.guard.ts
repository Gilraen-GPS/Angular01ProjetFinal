import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let curentAgent = JSON.parse(localStorage.getItem('currentAgent'))
      if(curentAgent){
        return true;
      }

      this.router.navigate(['/login'], {queryParams:{returnUrl : state.url}});
      return false;

  }
  
}
