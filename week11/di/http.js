const { FETCH } = require('./constants');
const ErrorHandler = require('./error-handler');

class Http {
  constructor(injector) {
    this.fetch = injector.get(FETCH);
    this.errorHandler = injector.get(ErrorHandler)
  }

  _handleRequest(fetchPromise) {
    return fetchPromise.then(res => {
      if (res.ok) { return res.json(); }
      return Promise.reject(new Error('Error loading data'))
    }).catch(err => {
      this.errorHandler.handleError(err);
      return Promise.reject(err);
    });
  }

  get(url) {
    return this._handleRequest(
      this.fetch(url)
    );
  }

  post(url, data) {
    this._handleRequest(
      this.fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json ' }
      })
    );
  }
}

module.exports = Http;