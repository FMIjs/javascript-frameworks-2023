import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hasLoggedUser$ = this.authService.user$.pipe(map(user => !!user));

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
