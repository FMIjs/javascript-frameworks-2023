const { API_URL } = require('./constants');
const Http = require('./http');

module.exports = class API extends Http {
  constructor(injector) {
    super(injector);
    this.apiURL = injector.get(API_URL);
  }

  _preparePath(path) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  get(path) {
    return super.get(this.apiURL + this._preparePath(path));
  }

  post(path, data) {
    return super.post(this.apiURL + this._preparePath(path), data);
  }
}