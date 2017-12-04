import { SessionService } from '../session.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isAuth = this.session.isAuthenticated();
      if (!isAuth) {
        this.router.navigate(['login']);
      }
      return isAuth;
    }
}
