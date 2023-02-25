import { UserRole } from "./enums";
// import { IUser, Promis } from "./types-and-interfaces";

// export function createPromis<T>(value: T): Promis<T> {
//   return { value };
// }

// export function createPartialUser(data: Partial<IUser>) {

// }

// createPartialUser({ r})
// const result = createPromis(321321);

// result.value

// export function createUser(name: string): IUser {
//   return {
//     name,
//     role: UserRole.Admin
//   };
// }

export function test(a: number): boolean;
export function test(a: number, b: string): boolean;
export function test(config: { a: number, b?: string }): boolean;
export function test(...args: any[]): boolean {
  return true;
}


// test()



// export function getName(this: { name: string }) {
//   return this.name;
// }