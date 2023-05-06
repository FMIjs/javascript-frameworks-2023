import { Component, Inject } from '@angular/core';
import { UserService } from './user.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fmi';
  users: any[] | null = null;
  isLoading = false;

  changeTitleHandler($event: string) {
    this.title = $event;
  }

  constructor(
    @Inject('test') testValue: string, // injector.get('test')
    // @Inject(UserService) userService: UserService // injector.get(UserService)
    private userService: UserService // same as the one above but simpler
  ) {
    // console.log(testValue, userService.users);
    // this.loadUsers();
  }

  loadUsers() {
    this.users = [];
    this.isLoading = true;
    this.userService.loadUsers().pipe(delay(5000)).subscribe(users => {
      this.isLoading = false;
      this.users = users;
    });
  }
}
