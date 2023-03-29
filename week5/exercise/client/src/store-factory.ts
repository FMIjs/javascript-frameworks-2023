import { Subject, BehaviorSubject, withLatestFrom, map, distinctUntilChanged } from "rxjs";
import { ActionType } from "./actions";

export function storeFactory<S, A = ActionType>(
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
    select: <R>(selector: (state: S) => R) => state$$.pipe(map(selector), distinctUntilChanged()),
    dispatch: (action: A) => actions$$.next(action),
    actions$: actions$$.asObservable()
  };
}