const { FETCH, LOGGER, API_URL } = require('./constants');
const fetch = require('node-fetch');
const injector = require('./injector');
const ErrorHandler = require('./error-handler');
const Http = require('./http');
const Api = require('./api');
const App = require('./app');
const { FSLogger, ERROR_FILE_PATH } = require('./fs-logger');

injector.provide({
  provide: ERROR_FILE_PATH,
  useValue: 'hello-world'
});

injector.provide({
  provide: ErrorHandler,
  useClass: ErrorHandler
});

injector.provide({
  provide: Http,
  useClass: Http
});

injector.provide({
  provide: Api,
  useClass: Api
});

injector.provide({
  provide: API_URL,
  useValue: 'https://jsonplaceholder.typicode.com'
});

injector.provide({
  provide: FETCH,
  useValue: fetch
});

// injector.provide({
//   provide: LOGGER,
//   useValue: console
// });

injector.provide({
  provide: LOGGER,
  useClass: FSLogger
});

const app = new App(injector);

app.start();
