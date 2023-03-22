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