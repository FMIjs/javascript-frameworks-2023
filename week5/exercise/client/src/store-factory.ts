import { Subject, BehaviorSubject, withLatestFrom, map } from "rxjs";
import { Action, ActionWithPayload } from "./actions";

export function storeFactory<S, A = Action | ActionWithPayload>(
  initialState: S,
  reducerFn: (state: S, action: A) => S
) {
  const actions$$ = new Subject<A>();
  const state$$ = new BehaviorSubject<S>(initialState);

  actions$$.pipe(
    withLatestFrom(state$$),
    map(([action, currentState]) => {
      return reducerFn(currentState, action);
    })
  ).subscribe({
    next: newValue => state$$.next(newValue)
  });

  return {
    select: <R>(selector: (state: S) => R) => state$$.pipe(map(selector)),
    dispatch: (action: A) => actions$$.next(action),
    actions$: actions$$.asObservable()
  };
}