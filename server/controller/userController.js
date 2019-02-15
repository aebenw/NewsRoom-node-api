import { User, Article, Source } from '../models';
import { passport } from '../server'
import { asyncMapping } from './connectingFuncs'

export const createUser  = async (req, res) => {
  try {
    const user = await User.create(req.body);
    let token = await user.generateAuthToken()
    res.status(200).send({user, token});
  } catch (e) {
// ************* Not super flushed out, need to return back to.
    let errors = []
    if(e.errmsg)errors.push("Email already taken")
    if(e.errors){
      for(let key in e.errors){
        if(e.errors[key].message) errors.push(e.errors[key].message)
      }
    }
    res.send({errors})
  }
};

export const login = async (req, res) => {
  try {
    let user = await User.findOne({email: req.body.email})
    if(user){
      if(user.password === req.body.password){
        res.send({user, token: user.tokens[0].token})
      } else res.send({errors: ['password is incorrect']})
    } else res.send({errors: ['email does not exist']})
  } catch (e) {
    res.send(e)
  }
};

export const favArticle = async (req, res) => {
  let user = await User.findById(req.body.userID)
  let article = await Article.findById(req.body.articleID)
  user.articles.push(article)
  article.users.push(user)
  user.save().then(null, (e) => e)
  article.save().then(null, (e) => e);
  res.status(200).send({success: true})
};

export const followSource = async (req, res) => {
  let user = await User.findById(req.body.userID).then(doc => doc)
  let source = await Source.findById(req.body.sourceID).then(doc => doc)
  user.sources.push(source)
  source.users.push(user)
  user.save().then(null, (e) => e)
  source.save().then(null, (e) => e);
  res.status(200).send(source)
};

export const savedArticles = async (req, res) => {
  const { articles } = req.body;

  let foundArticles = await Promise.all(articles.map(async (article) => {
     let found = await Article.findById(article)
     return found
   }))

  res.status(200).send(JSON.stringify(foundArticles, undefined, 2));
}

export const retrieveSession = (req, res) => {
  res.status(200).send(req.user)
}

passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(userId, done) {
    done(null, userId);
});
