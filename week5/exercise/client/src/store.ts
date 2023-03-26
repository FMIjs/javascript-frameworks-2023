import { Increment, IncrementWith, LoadUsersFailure, LoadUsersSuccess } from './actions';
import { IUser } from './interfaces-and-types';
import { storeFactory } from './store-factory';
import { init } from './create-effect';

interface IState {
  count: number;
  users: IUser[] | null;
  loadUsersError: null | Error;
}

export const store = storeFactory<IState>(
  {
    count: 0,
    users: null,
    loadUsersError: null
  },
  (state, action) => {
    if (action instanceof Increment) {
      return { ...state, count: state.count + 1 };
    }
    if (action instanceof IncrementWith) {
      return { ...state, count: state.count + action.incrementWith };
    }
    if (action instanceof LoadUsersSuccess) {
      return { ...state, users: action.users };
    }
    if (action instanceof LoadUsersFailure) {
      return { ...state, loadUsersError: action.error }
    }
    return state;
  }
);

export const createEffect = init(store);
