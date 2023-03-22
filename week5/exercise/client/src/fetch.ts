import { Observable, mergeMap, throwError } from "rxjs";
import { fromFetch } from 'rxjs/fetch';

export function useFetch<T>(url: string): Observable<T> {
  return fromFetch(url).pipe(
    mergeMap(res => res.ok ?
      res.json() :
      throwError(() => new Error('Cannot load users'))
    )
  )
}

export function useApiFetch<T>(path: string): Observable<T> {
  return useFetch(`https://jsonplaceholder.typicode.com${path}`);
}
