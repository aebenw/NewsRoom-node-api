const request = require('supertest');
import chai, { expect } from 'chai';
const {app} = require('../server');
import { Comment, User } from '../models'


before((done) => {
  Comment.remove({}).then(() => done())
});

describe('comment routes', () => {
  let comment;
  describe('post /comment', async () => {

    it('should make a new Comment', (done) => {
      request(app)
      .post('/comments')
      .send({content: "first comment", user: "5c58887d6cfb068150d38d67"})
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
    it('should have the name of the user', (done) => {
      request(app)
      .get(`/comments/${comment._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('user')
        expect(res.body.user).to.have.property('name')
        done()
      })
    })
  })
});
