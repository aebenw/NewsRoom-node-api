const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
// const should = chai.should;
const {app} = require('./server');
import { Comment } from './models'


beforeEach((done) => {
  Comment.remove({}).then(() => done());
});

// it('should give back a testing response', (done) => {
//   request(app)
//   .get('/')
//   .then((res) => {
//     expect(res.text).to.eq('testing');
//     done();
//   });
// });

describe('routes', () => {

  describe('post /comment', () => {
    let comment;
    it('should make a new Comment', (done) => {
      request(app)
      .post('/comments')
      .send({content: "first comment"})
      .end((err, res) => {
        comment = res.body
        expect(res.status).to.eq(200);
        expect(res.body.content).to.eq('first comment');
        done()
      })
    })

    it('should have a user', () => {
      expect(comment).to.have.property('user')
    })
  })
  // it('GET/sources should retrieve all sources', (done) => {
  //   request(app)
  //   .get('/news/sources')
  //   .then(res => {
  //     expect(res.body).to.be.an.instanceOf(Array);
  //     done();
  //   });
  // });

});
