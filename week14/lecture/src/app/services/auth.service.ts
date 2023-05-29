import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$$: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  user$: Observable<any | null> = this.user$$.asObservable();

  constructor(private router: Router) {
    this.authenticate();
  }

  authenticate(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.user$$.next(JSON.parse(user));
    }
  }

  login(): void {
    const user = { name: 'Pesho' };
    this.user$$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    this.user$$.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}