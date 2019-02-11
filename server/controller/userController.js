import { User, Article, Source } from '../models';

exports.createUser  = async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.user = user
    res.status(200).send(user);
  } catch (e) {
    res.send(e)
  }
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({email: req.body.email})
    if(user){
      if(user.password === req.body.password){
        req.session.user = user
        console.log(req.session, req.cookies)
        res.send(user)
      } else res.send({error: 'password is incorrect'})
    } else res.send({error: 'email does not exist'})
  } catch (e) {
    res.send(e)
  }
};

exports.favArticle = async (req, res) => {
  console.log(req.body)
  let user = await User.findById(req.body.userID)
  console.log(user)
  let article = await Article.findById(req.body.articleID)
  user.articles.push(article)
  article.users.push(user)
  user.save().then(null, (e) => e)
  article.save().then(null, (e) => e);
  res.status(200).send({message: `${user.name} likes ${article.title}`})
};

exports.followSource = async (req, res) => {
  let user = await User.findById(req.body.userID).then(doc => doc)
  let source = await Source.findById(req.body.sourceID).then(doc => doc)
  user.sources.push(source)
  source.users.push(user)
  user.save().then(null, (e) => e)
  source.save().then(null, (e) => e);
  res.status(200).send(source)
};
