import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { IUser, UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  // users: IUser[] = []; // ! 1st way to get the users
  // users$ = this.userService.users$; // ! 2nd way to get the users --> get them from the service

  users: IUser[] = []; // ! 3rd way to get the users --> get from the route data

  constructor(private userService: UserService, private route: ActivatedRoute) {
    // ! 1st way to load the users
    // this.route.queryParams.pipe(
    //   switchMap(qp => {
    //     const filterName = qp['filter'];
    //     return this.userService.loadUsers(filterName ? { name: filterName } : undefined)
    //   })
    // ).subscribe(users => {
    //   this.users = users;
    // });

    // ! 3rd way to get the users
    this.users = this.route.snapshot.data['users'];
  }
}
