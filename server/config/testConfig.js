const request = require('supertest');
const {app} = require('../server');


import {
  Source,
  User,
  Article,
  Comment
} from '../models'


async function checkUsers(){
  let user =  await User.findOne();
  if (!user){
    user = await User.create({name: 'eben', email: "e@e.com", password: "test"})
  }
  return user
}
async function checkArticles(){
  let article =  await Article.findOne();
  if (!article){
    article = Article.create({author: "frank", title: "it happened again"})
    }
    return article
}
async function checkSource(){
  let source =  await Source.findOne();
  if (!source){
    source = Source.create({name: "tbs", description: "the feel good place for news"})
    }
    return source
}

export {
  checkUsers,
  checkArticles,
  checkSource
}
