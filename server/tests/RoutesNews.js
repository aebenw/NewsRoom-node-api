const request = require('supertest');
import chai, { expect } from 'chai';
const {app} = require('../server');

describe('calling the news API', () => {
  it('should give back a testing response', (done) => {
    request(app)
    .get('/')
    .then((res) => {
      expect(res.text).to.eq('testing');
      done();
    });
  });
    it('GET/sources should retrieve all sources', (done) => {
      request(app)
      .get('/news/sources')
      .then(res => {
        expect(res.body).to.be.an.instanceOf(Array);
        done();
      });
    });
    it('GET/articles should retrieve all sources', (done) => {
      request(app)
      .get('/news/articles')
      .then(res => {
        expect(res.body).to.be.an.instanceOf(Array);
        done();
      });
    });
})
