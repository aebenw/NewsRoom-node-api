"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _models = require("../models");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const request = require('supertest');

const {
  app
} = require('../server');

before(done => {
  _models.Comment.remove({}).then(() => done());
});
describe('comment routes', () => {
  let comment;
  describe('post /comment', async () => {
    it('should make a new Comment', done => {
      request(app).post('/comments').send({
        content: "first comment",
        user: "5c58887d6cfb068150d38d67"
      }).end((err, res) => {
        comment = res.body;
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body.content).to.eq('first comment');
        done();
      });
    });
    it('should have a user', () => {
      // console.log(comment)
      (0, _chai.expect)(comment).to.have.property('user');
    });
  });
  describe('get /comments/:id', () => {
    it('should retrieve a specific comment', done => {
      request(app).get(`/comments/${comment._id}`).end((err, res) => {
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body).to.have.property('content');
        (0, _chai.expect)(res.body.content).to.eq('first comment');
        done();
      });
    });
    it('should have the name of the user', done => {
      request(app).get(`/comments/${comment._id}`).end((err, res) => {
        (0, _chai.expect)(res.status).to.eq(200);
        (0, _chai.expect)(res.body).to.have.property('user');
        (0, _chai.expect)(res.body.user).to.have.property('name');
        done();
      });
    });
  });
});
//# sourceMappingURL=RoutesComments.test.js.map