// SOLID
// Clean Code
// Clean Architecture

// SIMPLE DEPENDENCY INJECTION
// class Something {
//   constructor(arg1, arg2, arg3) {
//     this.arg1 = arg1;
//     this.arg2 = arg2;
//   }

//   print() {
//     console.log(this.arg1, this.arg2);
//   }
// }


// class Something2 {
//   constructor(something) {
//     this.something = something;
//   }
// }

// function main() {
//   const s = new Something(1, 2, 3);
//   const s1 = new Something2(s);
// }

// DEPENDENCY INJECTION CONTAINER


class MyClass {
  constructor(injector) {
    this.myValue = injector.get(MY_NUMBER_TOKEN);
  }
}

class MyClass2 {
  constructor(injector) {
    this.myClass = injector.get(MyClass);
  }
}



class App {
  constructor(injector) {
    this.myClass = injector.get(MyClass);
    this.myClass2 = injector.get(MyClass2);
  }
}














const injector = {
  collection: new Map(),
  instances: new Map(),
  // { provide: TOKEN (string | class), useValue: any }
  // { provide: TOKEN (string | class), useClass: any }
  provide(provider) {
    this.collection.set(provider.provide, provider);
  },
  get(token, ...rest) {
    if (!this.collection.has(token) && rest.length === 0) {
      throw new Error(`Provider for token ${token} was not found!`);
    }
    const provider = this.collection.get(token) || rest[0];
    if ('useValue' in provider) { return provider.useValue; }
    if ('useClass' in provider) {
      let instance = this.instances.get(provider.useClass);
      if (instance) { return instance; }
      instance = new provider.useClass(injector);
      this.instances.set(provider.useClass, instance);
      return instance;
    }
  }
}

const MY_NUMBER_TOKEN = 'MY_NUMBER';


function bootstrap(root, injector) {
  const app = new root(injector)
}

injector.provide({
  provide: MY_NUMBER_TOKEN,
  useValue: 4
});

injector.provide({
  provide: MyClass2,
  useClass: MyClass2
});

injector.provide({
  provide: MyClass,
  useClass: MyClass
});

bootstrap(App, injector);

