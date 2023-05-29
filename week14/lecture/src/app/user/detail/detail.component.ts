import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user: any | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const userId = params['id'];
        if (!userId) {
          return [];
        }

        return this.userService.loadUser(userId);
      })
    ).subscribe(user => {
      console.log(user);
      this.user = user;
    });

    console.log(this.route);
  }
}
