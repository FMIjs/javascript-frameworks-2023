import { IUser } from './interfaces-and-types';
export class Action {
  constructor(
    public type: string
  ) { }
}

export class ActionWithPayload<T = any> extends Action {
  constructor(type: string, public payload: T) {
    super(type);
  }
}

export class Increment extends Action {
  constructor() {
    super('increment');
  }
}

export class IncrementWith extends ActionWithPayload<number> {
  constructor(incrementWith: number) {
    super('increment', incrementWith);
  }
}

export class LoadUsers extends Action {
  constructor() {
    super('loadUsers');
  }
}

export class LoadUsersSuccess extends ActionWithPayload<IUser[]> {
  constructor(users: IUser[]) {
    super('loadUsersSuccess', users);
  }
}

export class LoadUsersFailure extends ActionWithPayload<Error> {
  constructor(error: Error) {
    super('loadUsersSuccess', error);
  }
}
