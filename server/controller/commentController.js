import Comment from '../models/Comments';

export const postComment = (req, res) => {
  console.log(req.body.content)
    Comment.create({content: req.body.content}).then(doc => {
      console.log(doc)
      res.status(200).send(doc)
    }, e => res.status(400).send(e))
};
