import { Observable } from "rxjs";

const observable$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const id = setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
  return () => {
    clearTimeout(id);
  };
});

observable$.subscribe(console.log);


// Task 1

const stream$ = interval(1000);

stream$.subscribe(console.log);
