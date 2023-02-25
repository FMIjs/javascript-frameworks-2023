import { UserRole } from "./enums";

export interface Promis<T> {
  value: T
}

export interface IUser {
  name: string;
  role: UserRole
};

export type UserWithGetName = IUser & { getName?: any };

interface Test {
  name: string;
}

type C = IUser | Test;
