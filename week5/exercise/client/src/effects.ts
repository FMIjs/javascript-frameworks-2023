import { catchError, filter, map, of, switchMap } from 'rxjs';
import { LoadUsers, LoadUsersFailure, LoadUsersSuccess } from './actions';
import { createEffect } from './create-effect';
import { store } from './store';
import { useApiFetch } from './fetch';
import { IUser } from './interfaces-and-types';

const loadUsersEffect$ = store.actions$.pipe(
  filter(a => a instanceof LoadUsers),
  switchMap(() => useApiFetch<IUser[]>('/users').pipe(
    map(users => new LoadUsersSuccess(users)),
    catchError(err => of(new LoadUsersFailure(err)))
  )),
);

createEffect(store, loadUsersEffect$);

