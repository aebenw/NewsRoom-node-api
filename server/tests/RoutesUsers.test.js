const request = require('supertest');
import chai, { expect } from 'chai';
const {app} = require('../server');
import { Comment, User } from '../models'
import  {checkUsers, checkArticles, checkSource}  from '../config/testConfig'


let user;
let article;
let source
before((done) => {
  checkUsers().then(res => {
    user = res
    checkArticles().then(result => {
      article = result
      checkSource().then(response => {
        source = response
        done()
      })
    })
  })
})

describe('user Routes',  () => {

  describe('/user/login',  () => {
    it('returns back a user object',  (done) => {
      request(app)
      .post(`/user/login`)
      .send({email: user.email })
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('email')
        done()
      })
    })
  })

  describe('user can fav an article', () => {
    it('links a user to a source', (done) => {
      request(app)
      .post('/user/favArticle')
      .send({userID: user._id, articleID: article._id})
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.eq(`${user.name} likes ${article.title}`)
        done()
      })
    })
  })

  describe('user can follow a Source', () => {
    it('links a user to a source', (done) => {
      request(app)
      .post('/user/followSource')
      .send({userID: user._id, sourceID: source._id})
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('users')
        .to.be.an('array')
        // .that.nested.includes(user._id)
        // expect(res.body.users).to.include(user._id)
        done()
      })
    })
  })
})
