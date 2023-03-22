import { filter, map, merge, of } from 'rxjs';
import { Increment, LoadUsers, LoadUsersSuccess } from './actions';
import { store } from './store';
import './effects';

const counterContainer = document.getElementById('counter-container');
const incrementBtn = document.getElementById('increment-btn');
const loadUsersBtn = document.getElementById('load-users-btn');

const count$ = store.select(state => state.count);
const users$ = store.select(state => state.users);

users$.subscribe({
  next: (users) => console.log('Users value: ', users)
});

const isLoadingUsers$ = merge(
  of(false),
  store.actions$.pipe(
    filter(a => a instanceof LoadUsers),
    map(() => true)
  ),
  store.actions$.pipe(
    filter(a => a instanceof LoadUsersSuccess),
    map(() => false)
  )
);

isLoadingUsers$.subscribe({
  next: (isLoadingUsers) => console.log('Loading users: ', isLoadingUsers)
});



count$.subscribe({
  next: value => {
    counterContainer.innerHTML = value.toString();
  }
});

incrementBtn.addEventListener('click', () => { store.dispatch(new Increment()); })
loadUsersBtn.addEventListener('click', () => store.dispatch(new LoadUsers()));
// store.dispatch(new IncrementWith(10));


