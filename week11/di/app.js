const Api = require('./api');

class App {
  constructor(injector) {
    this.api = injector.get(Api);
  }

  start() {
    this.api.get('posts').then(posts => {
      console.log(posts.length);
    });
  }
}

module.exports = App;