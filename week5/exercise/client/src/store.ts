import { Increment, IncrementWith, LoadUsersFailure, LoadUsersSuccess } from './actions';
import { IUser } from './interfaces-and-types';
import { storeFactory } from './store-factory';

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
      return { ...state, count: state.count + action.payload };
    }
    if (action instanceof LoadUsersSuccess) {
      return { ...state, users: action.payload };
    }
    if (action instanceof LoadUsersFailure) {
      return { ...state, loadUsersError: action.payload }
    }
    return state;
  }
);