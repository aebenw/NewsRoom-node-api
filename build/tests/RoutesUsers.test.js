"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _models = require("../models");

var _testConfig = require("../config/testConfig");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const request = require('supertest');

const {
  app
} = require('../server');

let user;
let article;
let source;
before(done => {
  (0, _testConfig.checkUsers)().then(res => {
    user = res;
    (0, _testConfig.checkArticles)().then(result => {
      article = result;
      (0, _testConfig.checkSource)().then(response => {
        source = response;
        done();
      });
    });
  });
});
describe('user Routes', () => {
  describe('/user/login', () => {
    it('returns back a user object', done => {
      request(app).post(`/user/login`).send({
        email: user.email
      }).end((err, res) => {
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body).to.have.property('email');
        done();
      });
    });
  });
  describe('user can fav an article', () => {
    it('links a user to a source', done => {
      request(app).post('/user/favArticle').send({
        userID: user._id,
        articleID: article._id
      }).end((err, res) => {
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body).to.have.property('message');
        (0, _chai.expect)(res.body.message).to.eq(`${user.name} likes ${article.title}`);
        done();
      });
    });
  });
  describe('user can follow a Source', () => {
    it('links a user to a source', done => {
      request(app).post('/user/followSource').send({
        userID: user._id,
        sourceID: source._id
      }).end((err, res) => {
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body).to.have.property('users').to.be.an('array'); // .that.nested.includes(user._id)
        // expect(res.body.users).to.include(user._id)

        done();
      });
    });
  });
});
//# sourceMappingURL=RoutesUsers.test.js.map