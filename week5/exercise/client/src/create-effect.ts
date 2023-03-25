import { Observable } from "rxjs";
import { storeFactory } from "./store-factory";

export function init(store: ReturnType<typeof storeFactory<any>>) {
  return function createEffect(
    stream: Observable<any>
  ) {
    stream.subscribe({
      next: (newAction) => store.dispatch(newAction)
    })
  }
}