import { catchError, filter, map, Observable, of, switchMap } from 'rxjs';
import { Action, LoadUsers, LoadUsersFailure, LoadUsersSuccess, ActionConstructor, ActionWithPayloadConstructor } from './actions';

import { store, createEffect } from './store';
import { useApiFetch } from './fetch';

type AnyActionConstructor<T> = ActionWithPayloadConstructor<T> | ActionConstructor;


function asyncHandler<T, TS, TF>(
  requestUrl: string,
  requestCtr: AnyActionConstructor<T>,
  requestSuccessCtr: AnyActionConstructor<TS>,
  requestFailureCtr: AnyActionConstructor<TF>
) {
  return (actions$: Observable<Action>) => {
    return actions$.pipe(
      filter(a => a instanceof requestCtr),
      switchMap(() => useApiFetch<TS>(requestUrl).pipe(
        map(data => new requestSuccessCtr(data)),
        catchError(err => of(new requestFailureCtr(err)))
      )),
    );
  }
}


// const loadUsersEffect$ = store.actions$.pipe(
//   filter(a => a instanceof LoadUsers),
//   switchMap(() => useApiFetch<IUser[]>('/users').pipe(
//     map(users => new LoadUsersSuccess(users)),
//     catchError(err => of(new LoadUsersFailure(err)))
//   )),
// );

const loadUsersEffect$ = store.actions$.pipe(
  asyncHandler('/users', LoadUsers, LoadUsersSuccess, LoadUsersFailure)
)

createEffect(loadUsersEffect$);

