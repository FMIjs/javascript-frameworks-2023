import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  // ...
}

@Injectable()
export class UserService {

  users$$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$ = this.users$$.asObservable();

  constructor(private http: HttpClient) { }

  loadAndStoreUsers(filter?: { [key: string]: string }): Observable<IUser[]> {
    return this.loadUsers(filter).pipe(
      switchMap(users => {
        this.users$$.next(users);
        return this.users$;
      })
    )
  }

  loadUsers(filter ?: { [key: string]: string }) {
      const filterString = filter
        ? `?${Object.keys(filter).map(key => `${key}=${filter[key]}`).join('&')}`
        : '';
      return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${filterString}`);
    }

  loadUser(id: number) {
      return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}

