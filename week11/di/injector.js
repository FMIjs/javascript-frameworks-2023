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

module.exports = injector;