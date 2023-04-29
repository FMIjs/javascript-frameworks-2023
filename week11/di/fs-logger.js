const fs = require('fs');
const ERROR_FILE_PATH = Symbol('ERROR_FILE_PATH');
const defaultFilePath = 'error.log';

class FSLogger {
  constructor(injector) {
    this.errorFilePath = injector.get(ERROR_FILE_PATH, defaultFilePath);
  }

  log(...messages) {
    return new Promise((res, rej) => {
      const fullMessage = messages.join(',');
      fs.appendFileSync(this.errorFilePath, fullMessage + '\n');
      // fs.writeFile('error.log', fullMessage, (err) => {
      //   if (err) { return void rej(err); }
      //   res(message);
      // });
    });
  }

}

module.exports = { FSLogger, ERROR_FILE_PATH };
