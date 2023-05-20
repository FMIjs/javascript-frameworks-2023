import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    // {
    //   provide: UserService,
    //   useValue: {
    //     loadUsers: () => {
    //       return of(['HELLO!']);
    //     }
    //   }
    // }
  ]
})
export class ListComponent {
  selectedUser: any | null = null;
  users: any[] = [{
    id: 1,
    name: 'User 1',
    groups: [
      {
        id: 1,
        name: 'Group 1'
      },
      {
        id: 2,
        name: 'Group 2'
      },
      {
        id: 3,
        name: 'Group 3'
      }
    ]
  }, {
    id: 2,
    name: 'User 2',
    groups: [
      {
        id: 1,
        name: 'Group 1'
      },
      {
        id: 3,
        name: 'Group 3'
      }
    ]
  },
  {
    id: 3,
    name: 'User 3',
    groups: [
      {
        id: 3,
        name: 'Group 3'
      }
    ]
  }];

  constructor(private userService: UserService) {
    // this.userService.loadUsers().subscribe(users => {
    //   this.users = users;
    // });
  }

  newUserHandler(name: string) {
    this.users.push({ name });
  }

  selectUserHandler(user: any): void {
    if (this.selectedUser?.id === user?.id) {
      return void (this.selectedUser = null);
    }
    this.selectedUser = user;
  }
}
