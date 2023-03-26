import { IUser } from './interfaces-and-types';

export interface ActionConstructor<T extends string = string> {
  new(type: T): ActionType;
}

export class ActionType<T extends string = string> {
  constructor(public type: T) { }
}

export const Action: ActionConstructor = ActionType;

export type ActionWithPayloadConstructor<P extends object = object, T extends string = string> = {
  new(payload: P): ActionType<T> & P
}

export class ActionWithPayloadType<P extends object = object, T extends string = string> {
  type: T;
  constructor(public payload: P) { }
}

export class Increment extends Action {
  constructor() {
    super('increment');
  }
}

export class IncrementWith extends Action {
  constructor(public incrementWith: number) {
    super('increment');
  }
}

export class LoadUsers extends Action {
  constructor() {
    super('loadUsers');
  }
}

export class LoadUsersSuccess extends Action {
  constructor(public users: IUser[]) {
    super('loadUsersSuccess');
  }
}

export class LoadUsersFailure extends Action {
  constructor(public error: Error) {
    super('LoadUsersFailure');
  }
}
