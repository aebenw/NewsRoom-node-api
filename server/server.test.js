const request = require('supertest');
import chai, { expect } from 'chai';
const {app} = require('./server');
import { Comment, User } from './models'

before((done) => {
  Comment.remove({}).then(() => done())
  // await User.remove({})
  // return done()
});

// it('should give back a testing response', (done) => {
//   request(app)
//   .get('/')
//   .then((res) => {
//     expect(res.text).to.eq('testing');
//     done();
//   });
// });

describe('comment routes', () => {
  let comment;

  describe('post /comment', async () => {
    // let user = await User.create({name: "tester", email: "t@t.com", password: "test"})

    it('should make a new Comment', (done) => {
      request(app)
      .post('/comments')
      .send({content: "first comment", user:"5c57860902a2ec4ed2192b05"})
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
  describe('get /comments/:id', () => {
    it('should retrieve a specific comment', (done) => {
      request(app)
      .get(`/comments/${comment._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('content')
        expect(res.body.content).to.eq('first comment')
        done()
      })
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
