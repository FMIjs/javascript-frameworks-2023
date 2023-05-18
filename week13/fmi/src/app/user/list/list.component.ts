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
  users: any[] = [];

  constructor(private userService: UserService) {
    this.userService.loadUsers().subscribe(users => {
      this.users = users;
    });
  }

  selectUserHandler(user: any): void {
    if (this.selectedUser?.id === user?.id) {
      return void (this.selectedUser = null);
    }
    this.selectedUser = user;
  }
}
