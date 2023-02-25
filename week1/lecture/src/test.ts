type LengthOf<T extends any[]> = T['length'];

type Head<T extends any[]> = T extends [head: infer U, ...tail: any] ? U : never;
type Tail<T extends any[]> = T extends [head: any, ...tail: infer U] ? U : never;
type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type Unshift<T extends any[], Item> =
  ((item: Item, ...rest: T) => any) extends
  (...list: infer R) => any ? R : never;

type r = Unshift<[1, 2, 3], 10000>;

// type a = Head<['100000', 2, 3]>
// type b = Tail<[1, 2, 3]>