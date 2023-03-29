import { Observable } from "rxjs";
import { ActionType } from "./actions";
import { storeFactory } from "./store-factory";

export function init(store: ReturnType<typeof storeFactory<any>>) {
  return function createEffect(
    fn: (action$: ReturnType<typeof storeFactory<any>>['actions$']) => Observable<ActionType>
  ) {
    return fn(store.actions$).subscribe({ next: (newAction) => store.dispatch(newAction) });
  }
}
