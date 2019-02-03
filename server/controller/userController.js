import { User, Article } from '../models';
// const {Article} = require('../models/news/Articles');

exports.createUser  = (req, res) => {
    const user = new User(req.body);
    user.save().then(doc => {
      res.status(200).send(doc);
    }, (e) => res.status(400).send(e));
};

exports.login = (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    res.status(200).send(user);
  });
};

exports.favArticle = async (req, res) => {
  let user = await User.findById(req.body.userID).then(doc => doc)
  let article = await Article.findById(req.body.articleID).then(doc => doc)
  user.articles.push(article)
  article.users.push(user)
  user.save().then(null, (e) => e)
  article.save().then(null, (e) => e);
  res.status(200)
};
