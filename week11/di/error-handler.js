const { LOGGER } = require('./constants');

class ErrorHandler {
  constructor(injector) {
    this.logger = injector.get(LOGGER);
  }

  handleError(error) {
    this.logger.log(error.message);
  }
}

module.exports = ErrorHandler;