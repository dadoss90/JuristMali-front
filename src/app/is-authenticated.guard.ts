import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ConnexionPage } from './connexion/connexion.page';
import { LoginService } from './Services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private loginservice : LoginService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginservice.isLoggedIn$.pipe(
      tap(isLoggedIn => {
        if(!isLoggedIn) {
          this.router.navigate(['connexion'])
        }
      })
    );
  }
  
}
