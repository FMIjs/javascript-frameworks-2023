import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const noAuthenticationRequired = route.data['authenticationRequired'] === false;

    return this.authService.user$.pipe(
      take(1),
      map(user => {
        if (noAuthenticationRequired) {
          return !!user
            ? this.router.parseUrl('/home') // false
            : true;
        }
    
        return !!user
          ? true
          : this.router.parseUrl('/login'); // false

      })
    );

  }

}