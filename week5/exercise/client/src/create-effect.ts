import { Observable } from "rxjs";
import { storeFactory } from "./store-factory";

export function createEffect(
  store: ReturnType<typeof storeFactory<any>>,
  stream: Observable<any>
) {
  stream.subscribe({
    next: (newAction) => store.dispatch(newAction)
  })
}