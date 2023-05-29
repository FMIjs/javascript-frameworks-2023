import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { IUser, UserService } from '../user.service';

@Injectable()
export class UserListResolver implements Resolve<IUser[]> {

  constructor(private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.loadAndStoreUsers();
  }
}
