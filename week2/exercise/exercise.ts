type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  role: string;
  prop1: number;
};

/*
  UNION TYPE

  A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.
  An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.
*/
type Person = User | Admin;

const somePerson: Person = {
  // type: 'user',
  name: "John",
  age: 30,
  role: "something",
  prop1: 1,
};
somePerson.name; // this is fine, since both User and Admin have a `name` property
somePerson.age; // this is not fine, since only User has an `age` property


const someWeirdPerson: Person = { // Here it can't tell if its a User or an Admin #
  name: "John",
  age: 30,
  role: "something",
  prop1: 1,
};

someWeirdPerson.name; // # and this is fine, since both User and Admin have a `name` property
someWeirdPerson.age; // but this isn't, since it's not in the Admin

const personIsUser = (user: Person): user is User => {
  return 'age' in user;
}

const test = (person: Person) => {
  // at this stage `person` is of type `Person`
  person.age; // and this throws an error

  if (personIsUser(person)) {
    // at this stage `person` is of type `User`
    person.age; // and this is fine
  }
}

const userPerson: Person = { // This person is matched as a User ##
  name: "John",
  age: 30,
};
userPerson.age; // ## and this is fine, because of that
userPerson.role; // and this is not, because it's an Admin property
userPerson.name; // this is fine as well since it's a shared property

const adminPerson: Person = { // This person is matched as an Admin ###
  name: "John",
  role: "something",
  prop1: 1,
};
adminPerson.prop1; // ### and this is fine, because of that

const errorPerson: Person = {
  // type: 'user',
  name: "John",
  age: 30,
  role: "something",
}


type AdminUser = User & Admin;
const adminUser: AdminUser = {
  name: "John",
  age: 30,            //
  role: "something",  // ==> If any of these are missing, it will throw an error
  prop1: 1,           //
};


// ! ==================== ==================== ==================== ==================== 


class Test1 {
  public a?: string
}

class Test2 {
  public b?: string
}

class Test3 {
  public a?: string;
  public c: string = 'c';
}

let x: (typeof Test1 | typeof Test2)[];
x = [Test1]; //ok
x = [Test1, Test2]; //ok
x = [Test3]; //compilation error
x = [Test1, Test2, Test3]; //compilation error // ---> nope, it's ok
console.log(x);

let y: (Test1 | Test2)[];
y = [new Test1(), new Test2()]; //ok
y = [new Test3()]; //compilation error // ---> nope, it's ok
console.log(y);


// ! ==================== ==================== ==================== ==================== 


interface Animal {
  name: string;
  walk: () => string;
}

class SomeAnimal implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

interface Dog extends Animal {
  bark: () => string;
}

interface Cat extends Animal {
  meow: () => string;
}

type Pet = Dog | Cat;

// Type narrowing
// Връща boolean (в смисъла на JS), но също така казва на TS дали аргументът `pet` е куче.
const isDog = (pet: Pet): pet is Dog => {
  return 'bark' in pet;
}

const doSomething = (pet: Pet) => {
  if (isDog(pet)) {
    pet.bark(); // Here it knows that pet is a Dog
  } else {
    pet.meow(); // Here it knows that pet is a Cat
  }
}


// ! ==================== ==================== ==================== ====================


const formatDate = <B extends boolean | undefined>(
  timestamp: number, toDate?: B
): (B extends undefined ? never : B extends boolean ? Date : string) => {
  const date = new Date(timestamp);

  if (toDate) {
    return date;
  } else {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  // const isBoolean = (d: B | undefined) : d is B => {
  //   return typeof d === 'boolean';
  // }

  // const isB = isBoolean(toDate);
  // if (isB) {
  //   toDate;
  //   return date;
  // }
  // return `${date.getHours()}:${date.getMinutes()}`;
  
  // return isBoolean(toDate) ? date : `${date.getHours()}:${date.getMinutes()}`;
  // return toDate ? date : `${date.getHours()}:${date.getMinutes()}`;
}

const timestamp = Date.now();

const stringDate = formatDate(timestamp);
const dateDate = formatDate(timestamp, true);


// ! ==================== ==================== ==================== ====================


type WithGenerics<T, S> = {
  name: T extends { test: boolean } ? string : number;
  name2: T | S;
}

const genericTest: WithGenerics<{ test: boolean }, { best: string }> = {
  name: 's',
  name2: { test: true, best: 'test' },
};

const genericTest2: WithGenerics<{ test: string }, { best: string }> = {
  name: 2,
  name2: { test: 'best', best: 'test'}
};
