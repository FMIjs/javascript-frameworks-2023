import { BehaviorSubject, map, take } from "rxjs";
import { Action, ActionWithPayload, Increment, IncrementWith } from './actions';

function storeFactory<S>(
  initialState: S,
  reducerFn: (state: S, action: Action | ActionWithPayload) => S
) {
  const state$$ = new BehaviorSubject<S>(initialState);
  return {
    select: <R>(selector: (state: S) => R) => {
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

interface IState {
  count: number;
  user: {
    name: string
  }
}

const store = storeFactory<IState>(
  {
    count: 0,
    user: {
      name: 'Ivan'
    }
  },
  (state, action) => {
    if (action instanceof Increment) {
      return { ...state, count: state.count + 1 };
    }
    if (action instanceof IncrementWith) {
      return { ...state, count: state.count + action.payload };
    }
  }
);

const counterContainer = document.getElementById('counter-container');
const incrementBtn = document.getElementById('increment-btn');

const count$ = store.select(state => state.count);

const userName$ = store.select(state => state.user.name);

count$.subscribe({
  next: value => {
    counterContainer.innerHTML = value.toString();
  }
});

incrementBtn.addEventListener('click', () => { store.dispatch(new Increment()); })
// store.dispatch(new IncrementWith(10));
