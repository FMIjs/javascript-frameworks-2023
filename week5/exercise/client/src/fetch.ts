import { Observable, mergeMap } from "rxjs";
import { fromFetch } from 'rxjs/fetch';

export function useFetch<T>(url: string): Observable<T> {
  return fromFetch(url).pipe(mergeMap(res => res.json()))
}

export function useApiFetch<T>(path: string): Observable<T> {
  return useFetch(`https://jsonplaceholder.typicode.com${path}`);
}
