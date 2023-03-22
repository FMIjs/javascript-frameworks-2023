import { BehaviorSubject, map, take } from "rxjs";
import { Action, ActionWithPayload, Increment, IncrementWith } from './actions';

function storeFactory<S>(
  initialState: S,
  reducerFn: (state: S, action: Action | ActionWithPayload) => S
) {
  const state$$ = new BehaviorSubject<S>(initialState);
  return {
    select: (selector: (state: S) => S[keyof S]) => {
      return state$$.pipe(map(selector));
    },
    dispatch: (action: Action | ActionWithPayload) => {
      state$$.pipe(
        take(1),
        map(currentState => reducerFn(currentState, action))
      ).subscribe({
        next: newValue => state$$.next(newValue)
      });
    }
  };
}

const store = storeFactory({ count: 0 }, (state, action) => {
  if (action instanceof Increment) {
    return { ...state, count: state.count + 1 };
  }
  if (action instanceof IncrementWith) {
    return { ...state, count: state.count + action.payload };
  }
});

const count$ = store.select(state => state.count);
count$.subscribe({ next: value => console.log(value) });

store.dispatch(new Increment());
store.dispatch(new IncrementWith(10));
