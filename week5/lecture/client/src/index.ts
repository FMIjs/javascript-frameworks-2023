import { Subject, ReplaySubject, BehaviorSubject, of, bufferCount, Observable, interval, take, ConnectableObservable, connectable, scheduled, from, asyncScheduler, queueScheduler, asapScheduler, animationFrameScheduler, observeOn, mergeMap, delay, SchedulerAction, SchedulerLike } from "rxjs";

// // const subject = new Subject();
// // subject.subscribe(console.log);

// // subject.next(1);

// // setTimeout(() => {
// //   subject.subscribe(console.log);

// //   subject.next(2);
// //   subject.next(3);
// //   console.log('Subscription created!');
// // }, 1000);

// const rSubject = new ReplaySubject<{ name: string; age: number }>(2);
// rSubject.next({ name: 'Ivan 1', age: 19 });
// rSubject.next({ name: 'Ivan 2', age: 19 });

// rSubject.subscribe(console.log);

// rSubject.next({ name: 'Ivan 3', age: 19 });

// setTimeout(() => {
//   rSubject.subscribe(console.log)
// }, 2000);

// // const bSubject = new BehaviorSubject<{ name: string; age: number }>({ name: 'Ivan', age: 19 });

// // bSubject.subscribe(console.log);

// // bSubject.next({ name: 'Pesho', age: 12 });

// // setTimeout(() => {
// //   bSubject.subscribe(console.log);
// //   console.log('Subscription created!');
// // }, 1000);


// // from(['/posts', '/users', '/comments']);

// function takeAllValuesUntilCompleted<T>(source: Observable<T>) {
//   return new Observable<T[]>(observer => {
//     const buffer: T[] = [];
//     source.subscribe({
//       next: (value) => buffer.push(value),
//       error: (err) => observer.error(err),
//       complete: () => {
//         observer.next(buffer);
//         observer.complete();
//       }
//     })
//   });
// }

// function shareReplay(bufferCount: number) {
//   const subject = new ReplaySubject(bufferCount);
//   console.log('Subject has been created');
//   return function shareReplayHandler<T>(source: Observable<T>) {
//     source.subscribe(subject);
//     return subject.asObservable();
//   };
// }

// const data$ = of('/posts', '/users', '/comments').pipe(
//   shareReplay(1),
//   takeAllValuesUntilCompleted,
// )

// data$.subscribe(console.log);


// setTimeout(() => {
//   data$.subscribe(console.log);
// })


// const source$ = interval(1000).pipe(take(3));

// const shared$ = connectable(source$, {
//   connector: () => new ReplaySubject(200)
// });

// shared$.subscribe({ next: value => console.log(value, 'first sub') })
// shared$.subscribe({ next: value => console.log(value, 'second sub') })
// setTimeout(() => {
//   shared$.subscribe({ next: value => console.log(value, 'third sub') })
// }, 2000);

function scheduledItems(scheduler: SchedulerLike = queueScheduler) {
  return function <T>(source: Observable<T>) {
    return new Observable(observer => {
      const buffer: T[] = [];
      source.subscribe({
        next: (v) => {
          buffer.push(v);
        },
        complete() {
          process(0);
        }
      });

      function process(index: number) {
        scheduler.schedule(() => {
          observer.next(buffer[index])
          if (buffer.length >= index + 1) { process(index + 1); }
        });
      }
    });
  };
}


asyncScheduler.schedule(() => {
  console.log(222222);
});
// asyncScheduler.schedule(() => {
//   console.log(1)
// })
// animationFrameScheduler.schedule(() => {
//   console.log(3);
// });

from([1, 2, 3, 4]).pipe(
  scheduledItems(animationFrameScheduler)
).subscribe({
  next: (v) => {
    console.log(v);
  }
});