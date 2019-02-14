"use strict";

var _chai = _interopRequireWildcard(require("chai"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const request = require('supertest');

const {
  app
} = require('../server');

describe('calling the news API', () => {
  it('should give back a testing response', done => {
    request(app).get('/').then(res => {
      (0, _chai.expect)(res.text).to.eq('testing');
      done();
    });
  });
  it('GET/sources should retrieve all sources', done => {
    request(app).get('/news/sources').then(res => {
      (0, _chai.expect)(res.body).to.be.an.instanceOf(Array);
      done();
    });
  });
  it('GET/articles should retrieve all sources', done => {
    request(app).get('/news/articles').then(res => {
      (0, _chai.expect)(res.body).to.be.an.instanceOf(Array);
      done();
    });
  });
});
//# sourceMappingURL=RoutesNews.js.map