import { catchError, filter, map, Observable, of, switchMap } from 'rxjs';
import { ActionType, ActionWithPayloadConstructor, LoadUsers, LoadUsersFailure, LoadUsersSuccess } from './actions';

import { createEffect } from './store';
import { useApiFetch } from './fetch';


function asyncHandler<
  T extends ActionWithPayloadConstructor<TP, TT>,
  TS extends ActionWithPayloadConstructor<TPS, TTS>,
  TF extends ActionWithPayloadConstructor<TPF, TTF>,
  TP extends object = object,
  TPS extends object = object,
  TPF extends object = object,
  TT extends string = string,
  TTS extends string = string,
  TTF extends string = string
>(
  requestUrl: string,
  requestCtr: T,
  requestSuccessCtr: TS,
  requestFailureCtr: TF
) {
  return (actions$: Observable<ActionType>) => {
    return actions$.pipe(
      filter(a => a instanceof requestCtr),
      switchMap(() => useApiFetch<TPS>(requestUrl).pipe(
        map(data => new requestSuccessCtr(data)),
        catchError(err => of(new requestFailureCtr(err)))
      )),
    ) as unknown as Observable<InstanceType<TS> | InstanceType<TF>>;
  }
}

createEffect(actions$ => actions$.pipe(
  asyncHandler('/users', LoadUsers, LoadUsersSuccess, LoadUsersFailure)
));
