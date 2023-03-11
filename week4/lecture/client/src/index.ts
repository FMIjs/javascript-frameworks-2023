
import { delay, from, map, mergeMap, of, interval, Observable } from 'rxjs';

// [1].map(x => x + 1); // standard container
// const a = Promise.resolve(1).then(x => x + 1);

// setTimeout(() => {
//   a.then(x => x + 3);
// }, 1000000000000);

// function test() {
//   return new Promise((res) => { // promise container
//     res(1000);
//   });
// }

// test();
// Promise.resolve(1);
// Promise.reject(new Error('1'));


Promise.resolve()
  .then(() => [new Promise(res => res(1000))])
  .then(([x]) => console.log(x))

function delayedOperation(o: Observable<number>) {
  return o.pipe(
    mergeMap(x => {
      console.log(`${x} is here!`);
      return of(x + 1).pipe(delay(1000 * x))
    })
  );
}


const b = of(1, 2, 3, 4)



// const sub = delayedOperation(b).subscribe(console.log);

// setTimeout(() => {
//   sub.unsubscribe();
// }, 2000);

function int(delay: number) {
  return new Observable<number>((observer) => {
    let i = 0;
    const id = setInterval(() => {
      observer.next(i++);
    }, delay);

    return () => {
      clearInterval(id);
    }
  });
}

const i = interval(1000);

i.subscribe({
  next: (x) => console.log(x),
  error: (x) => console.error(x),
  complete: () => console.log('Completed!')
});

// i.subscribe({
//   next: (x) => console.log(x),
//   error: (x) => console.error(x),
//   complete: () => console.log('Completed!')
// });