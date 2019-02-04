const request = require('supertest');
import chai, { expect } from 'chai';
const {app} = require('../server');
import { Comment, User } from '../models'



describe('user Routes',  async () => {


  // let user;
  // await User.findOne().then(doc => {
  //   user = doc
  // }, e => e)
  // console.log(user)
  // describe('user/favArticle', () => {
  //   request(app)
  //   .post('/user/favArticle')
  //   .send({articl})
  // })
  describe('/user/login', () => {
    it('returns back a user object', (done) => {
      request(app)
      .post(`/user/login`)
      .send({email: "t@t" })
      .end((err, res) => {
        console.log(res.body)
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('email')
        done()
      })
    })
  })


})
