import {Injectable, OnInit} from '@angular/core';
import {User} from "./user.model";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  user: User = new User();
  logged = false;

  constructor(private router: Router) {
    let user = localStorage.getItem('user');
    if (!user) return;
    this.logged = true;
    this.user = JSON.parse(user);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.logged) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
