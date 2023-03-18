import {
  bufferCount,
  delay,
  finalize,
  map,
  mergeMap,
  Observable,
  of,
  pairwise,
  switchMap,
  take,
  zip,
  fromEvent,
  debounceTime,
  debounce,
  distinctUntilChanged,
  startWith,
  tap,
  merge,
  timer,
  combineLatest,
  shareReplay,
  Subject
} from "rxjs";
import { fromFetch } from 'rxjs/fetch';
import { IPost, IUser, PostWithUser } from './interfaces-and-types';


// function one() {
//   return new Promise<number>((res) => {
//     setTimeout(() => { res(100); }, 1000)
//   })
// }

// function two(x: number) {
//   return new Promise<number>((res) => {
//     setTimeout(() => { res(x + 100); }, 1000)
//   })
// }
// // one().then((x) => two(x)).then(x => )



// const observable$ = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   const id = setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
//   return () => {
//     clearTimeout(id);
//   };
// });

// observable$.pipe(
//   finalize(() => { console.log('Completed or errored!'); })
// ).subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.error(error),
//   complete: () => console.log('Completed')
// });


// Task 1

function interval(delay: number) {
  return new Observable(observer => {
    let i = 0;
    const id = setInterval(() => {
      observer.next(i++);
    }, delay);

    // Clean up callback (clear interval when someone unsubscribes)
    return () => { clearInterval(id); };
  });
}

// const stream$ = interval(1000);

// stream$.pipe(
//   switchMap((x: number) => two(x))
// ).subscribe(console.log);

// of(10, 23, 31).pipe(
//   mergeMap(
//     (x, index) => interval((index + 1) * 1000).pipe(
//       take(1), map(() => x)
//     )
//   )
// ).subscribe({ next: (v) => console.log(v, 1) });

// of(10, 23, 31).pipe(
//   mergeMap((x, index) => of(x).pipe(delay((index + 1) * 1000)))
// ).subscribe({ next: (v) => console.log(v, 2) });

// function bufferUntilCompleted<T>(source: Observable<T>) {
//   return new Observable<T[]>(observer => {
//     const buffer: T[] = [];
//     const sub = source.subscribe({
//       next: (value) => buffer.push(value),
//       complete: () => {
//         observer.next(buffer);
//         observer.complete();
//       }
//     })
//     return () => {
//       sub.unsubscribe();
//     }
//   });
// }


// of('/users', '/posts', '/comments').pipe(
//   map(path => `https://jsonplaceholder.typicode.com${path}`),
//   bufferCount(3),
//   mergeMap((urls: string[]) => zip(
//     urls.map(url => fromFetch(url).pipe(
//       mergeMap(res => res.json()))
//     ))
//   )).subscribe({
//     next: ([users, posts, comments]) => {
//       console.log(users, 'users');
//       console.log(posts, 'posts');
//       console.log(comments, 'comments');
//     }
//   });


// fromFetch('https://jsonplaceholder.typicode.com/posts')
//   .pipe(
//     mergeMap(res => res.json())
//   )
//   .subscribe(console.log);


// https://jsonplaceholder.typicode.com/posts?q=...

function useFetch<T>(url: string): Observable<T> {
  return fromFetch(url).pipe(mergeMap(res => res.json()))
}

function useApiFetch<T>(path: string): Observable<T> {
  return useFetch(`https://jsonplaceholder.typicode.com${path}`);
}

const inputEl = document.getElementById('input') as HTMLInputElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;

const clearBtnClicks$ = fromEvent(clearBtn, 'click');
const inputElInputs$ = fromEvent(inputEl, 'input');

clearBtnClicks$.subscribe({
  next: () => { inputEl.value = ''; }
});


function filteredPostsHandler(source: Observable<Event>) {
  return source.pipe(
    map(e => {
      if (e.target instanceof HTMLInputElement) {
        return { value: e.target.value, input: true };
      }
      return { value: '', input: false };
    }),
    tap((data) => {
      if (data.value.length > 0) {
        clearBtn.removeAttribute('disabled');
      } else {
        clearBtn.setAttribute('disabled', 'true');
      }
    }),
    debounce((data) => data.input ? timer(500) : timer(0)),
    startWith({ value: '', input: false }),
    map((data: { value: string, input: boolean }) => {
      return data.value;
    }),
    distinctUntilChanged(),
    switchMap(filter => useApiFetch<IPost[]>(`/posts?q=${filter}`))
  )
}


const filteredPosts$ = merge(inputElInputs$, clearBtnClicks$).pipe(filteredPostsHandler);

const users$ = useApiFetch<IUser[]>(`/users`);


const postsWithUser$ = combineLatest([filteredPosts$, users$]).pipe(
  debounceTime(0),
  map(([posts, users]) => {
    const postsWithUser: PostWithUser[] = posts.map(({ userId, ...data }) => {
      const user = users.find(u => u.id === userId);
      return { ...data, user };
    })
    return postsWithUser;
  })
)

postsWithUser$.subscribe(console.log);




users$.subscribe(console.log);
setTimeout(() => {
  users$.subscribe(console.log);
}, 1000);


const subject = new Subject<string>();
subject.next('')
subject.next('')
subject.error(new Error('sdadas'));
subject.complete();

subject.subscribe();
subject.subscribe();
subject.subscribe();
subject.subscribe();
subject.subscribe();



// users$.subscribe(console.log);

// filteredPosts$.subscribe({
//   next: (value) => {
//     console.log(value)
//   },
//   error: (err) => {
//     console.error(err);
//   }
// });